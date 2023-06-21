import { Server, ServerCredentials } from "@grpc/grpc-js";
import { createServerB } from "./server";
import { getConfig } from "./config";
import { ServiceBService } from "./proto/service-b/serviceb_grpc_pb";

const config = getConfig();

const server = new Server();
const uri = `0.0.0.0:${config.port}`;

const serverB = createServerB();

console.log(`Listening on ${uri}`);
server.addService(ServiceBService, serverB);
server.bindAsync(uri, ServerCredentials.createInsecure(), (err) => {
  if (err) console.log(err);
  server.start();
});
