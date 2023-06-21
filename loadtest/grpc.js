import grpc from "k6/net/grpc";
import { check, sleep } from "k6";

const client = new grpc.Client();
client.load(["../grpc/protos/src/service-a"], "servicea.proto");

export const options = {
  stages: [
    { duration: "20s", target: 10 },
    { duration: "20s", target: 20 },
    { duration: "20s", target: 10 },
  ],
};

export default () => {
  if (__ITER == 0) {
    client.connect("0.0.0.0:8080", {
      plaintext: true,
    });
  }

  const data = { name: "Julian" };
  const response = client.invoke("serviceapb.ServiceA/Ping", data);

  check(response, {
    "status is OK": (r) => r && r.status === grpc.StatusOK,
  });

  sleep(1);
};
