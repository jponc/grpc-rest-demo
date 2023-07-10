import grpc from "k6/net/grpc";
import { check, sleep } from "k6";

const client = new grpc.Client();
client.load(["./protos"], "servicea.proto");

export const options = {
  stages: [
    { duration: "30s", target: 150 },
    { duration: "30s", target: 300 },
    { duration: "30s", target: 300 },
    { duration: "30s", target: 150 },
    { duration: "30s", target: 0 },
  ],
};

export default () => {
  if (__ITER == 0) {
    client.connect("0.0.0.0:9090", {
      plaintext: true,
    });
  }

  const data = { name: "Julian" };
  const response = client.invoke(
    "dev.jponc.grpc_rest.servicea.v1.ServiceA/Ping",
    data
  );

  check(response, {
    "status is OK": (r) => r && r.status === grpc.StatusOK,
  });

  sleep(1);
};
