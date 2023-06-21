// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var service$b_serviceb_pb = require('../service-b/serviceb_pb.js');

function serialize_servicebpb_PongRequest(arg) {
  if (!(arg instanceof service$b_serviceb_pb.PongRequest)) {
    throw new Error('Expected argument of type servicebpb.PongRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_servicebpb_PongRequest(buffer_arg) {
  return service$b_serviceb_pb.PongRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_servicebpb_PongResponse(arg) {
  if (!(arg instanceof service$b_serviceb_pb.PongResponse)) {
    throw new Error('Expected argument of type servicebpb.PongResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_servicebpb_PongResponse(buffer_arg) {
  return service$b_serviceb_pb.PongResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var ServiceBService = exports.ServiceBService = {
  pong: {
    path: '/servicebpb.ServiceB/Pong',
    requestStream: false,
    responseStream: false,
    requestType: service$b_serviceb_pb.PongRequest,
    responseType: service$b_serviceb_pb.PongResponse,
    requestSerialize: serialize_servicebpb_PongRequest,
    requestDeserialize: deserialize_servicebpb_PongRequest,
    responseSerialize: serialize_servicebpb_PongResponse,
    responseDeserialize: deserialize_servicebpb_PongResponse,
  },
};

exports.ServiceBClient = grpc.makeGenericClientConstructor(ServiceBService);
