// package: servicebpb
// file: service-b/serviceb.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import * as service_b_serviceb_pb from "../service-b/serviceb_pb";

interface IServiceBService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    pong: IServiceBService_IPong;
}

interface IServiceBService_IPong extends grpc.MethodDefinition<service_b_serviceb_pb.PongRequest, service_b_serviceb_pb.PongResponse> {
    path: "/servicebpb.ServiceB/Pong";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<service_b_serviceb_pb.PongRequest>;
    requestDeserialize: grpc.deserialize<service_b_serviceb_pb.PongRequest>;
    responseSerialize: grpc.serialize<service_b_serviceb_pb.PongResponse>;
    responseDeserialize: grpc.deserialize<service_b_serviceb_pb.PongResponse>;
}

export const ServiceBService: IServiceBService;

export interface IServiceBServer extends grpc.UntypedServiceImplementation {
    pong: grpc.handleUnaryCall<service_b_serviceb_pb.PongRequest, service_b_serviceb_pb.PongResponse>;
}

export interface IServiceBClient {
    pong(request: service_b_serviceb_pb.PongRequest, callback: (error: grpc.ServiceError | null, response: service_b_serviceb_pb.PongResponse) => void): grpc.ClientUnaryCall;
    pong(request: service_b_serviceb_pb.PongRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: service_b_serviceb_pb.PongResponse) => void): grpc.ClientUnaryCall;
    pong(request: service_b_serviceb_pb.PongRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: service_b_serviceb_pb.PongResponse) => void): grpc.ClientUnaryCall;
}

export class ServiceBClient extends grpc.Client implements IServiceBClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public pong(request: service_b_serviceb_pb.PongRequest, callback: (error: grpc.ServiceError | null, response: service_b_serviceb_pb.PongResponse) => void): grpc.ClientUnaryCall;
    public pong(request: service_b_serviceb_pb.PongRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: service_b_serviceb_pb.PongResponse) => void): grpc.ClientUnaryCall;
    public pong(request: service_b_serviceb_pb.PongRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: service_b_serviceb_pb.PongResponse) => void): grpc.ClientUnaryCall;
}
