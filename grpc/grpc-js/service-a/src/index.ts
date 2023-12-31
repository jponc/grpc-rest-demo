import { ChannelCredentials, Server, ServerCredentials } from "@grpc/grpc-js";
import { ServiceAService } from "grpc-rest-demo-pb/servicea_grpc_pb";
import { ServiceBClient } from "grpc-rest-demo-pb/serviceb_grpc_pb";

import { createServerA } from "./server";
import { getConfig } from "./config";

const config = getConfig();

const server = new Server();
const uri = `0.0.0.0:${config.port}`;

const serviceBClient = new ServiceBClient(
  config.serviceBHost,
  ChannelCredentials.createInsecure()
);

const deadline = new Date();
deadline.setSeconds(deadline.getSeconds() + 5000);

serviceBClient.waitForReady(deadline, (err) => {
  if (err) {
    console.log(err.message);
    process.exit(1);
  }

  const serverA = createServerA(serviceBClient);

  console.log(`Listening on ${uri}`);
  server.addService(ServiceAService, serverA);
  server.bindAsync(uri, ServerCredentials.createInsecure(), (err) => {
    if (err) console.log(err);
    server.start();
  });
});
