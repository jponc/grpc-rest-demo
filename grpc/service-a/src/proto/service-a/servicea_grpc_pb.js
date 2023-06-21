// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var service$a_servicea_pb = require('../service-a/servicea_pb.js');

function serialize_serviceapb_PingRequest(arg) {
  if (!(arg instanceof service$a_servicea_pb.PingRequest)) {
    throw new Error('Expected argument of type serviceapb.PingRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_serviceapb_PingRequest(buffer_arg) {
  return service$a_servicea_pb.PingRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_serviceapb_PingResponse(arg) {
  if (!(arg instanceof service$a_servicea_pb.PingResponse)) {
    throw new Error('Expected argument of type serviceapb.PingResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_serviceapb_PingResponse(buffer_arg) {
  return service$a_servicea_pb.PingResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var ServiceAService = exports.ServiceAService = {
  ping: {
    path: '/serviceapb.ServiceA/Ping',
    requestStream: false,
    responseStream: false,
    requestType: service$a_servicea_pb.PingRequest,
    responseType: service$a_servicea_pb.PingResponse,
    requestSerialize: serialize_serviceapb_PingRequest,
    requestDeserialize: deserialize_serviceapb_PingRequest,
    responseSerialize: serialize_serviceapb_PingResponse,
    responseDeserialize: deserialize_serviceapb_PingResponse,
  },
};

exports.ServiceAClient = grpc.makeGenericClientConstructor(ServiceAService);
