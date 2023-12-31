import { IServiceBServer } from "grpc-rest-demo-pb/serviceb_grpc_pb";
import { ServerUnaryCall, sendUnaryData } from "@grpc/grpc-js";
import { PongRequest, PongResponse } from "grpc-rest-demo-pb/serviceb_pb";

export const createServerB = (): IServiceBServer => {
  return {
    pong: (
      call: ServerUnaryCall<PongRequest, PongResponse>,
      callback: sendUnaryData<PongResponse>
    ) => {
      const pongRequest = call.request;

      const pongResponse = new PongResponse();
      pongResponse.setOut(`${pongRequest.getMessage()} from service B!`);

      callback(null, pongResponse);
    },
  };
};
