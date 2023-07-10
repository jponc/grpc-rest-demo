import { IServiceAServer } from "grpc-rest-demo-pb/servicea_grpc_pb";
import { PingRequest, PingResponse } from "grpc-rest-demo-pb/servicea_pb";
import { ServiceBClient } from "grpc-rest-demo-pb/serviceb_grpc_pb";
import { ServerUnaryCall, sendUnaryData } from "@grpc/grpc-js";
import { PongRequest } from "grpc-rest-demo-pb/serviceb_pb";

export const createServerA = (
  serviceBClient: ServiceBClient
): IServiceAServer => {
  return {
    ping: (
      call: ServerUnaryCall<PingRequest, PingResponse>,
      callback: sendUnaryData<PingResponse>
    ) => {
      const pingRequest = call.request;

      const pongRequest = new PongRequest();
      pongRequest.setMessage(`Hello ${pingRequest.getName()} from Service A`);

      serviceBClient.pong(pongRequest, (err, pongResponse) => {
        if (err) {
          callback(err, undefined);
          return;
        }

        const pingResponse = new PingResponse();
        pingResponse.setOut(`${pongResponse.getOut()} ... Done`);

        callback(null, pingResponse);
      });
    },
  };
};
