// package: serviceapb
// file: service-a/servicea.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import * as service_a_servicea_pb from "../service-a/servicea_pb";

interface IServiceAService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    ping: IServiceAService_IPing;
}

interface IServiceAService_IPing extends grpc.MethodDefinition<service_a_servicea_pb.PingRequest, service_a_servicea_pb.PingResponse> {
    path: "/serviceapb.ServiceA/Ping";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<service_a_servicea_pb.PingRequest>;
    requestDeserialize: grpc.deserialize<service_a_servicea_pb.PingRequest>;
    responseSerialize: grpc.serialize<service_a_servicea_pb.PingResponse>;
    responseDeserialize: grpc.deserialize<service_a_servicea_pb.PingResponse>;
}

export const ServiceAService: IServiceAService;

export interface IServiceAServer extends grpc.UntypedServiceImplementation {
    ping: grpc.handleUnaryCall<service_a_servicea_pb.PingRequest, service_a_servicea_pb.PingResponse>;
}

export interface IServiceAClient {
    ping(request: service_a_servicea_pb.PingRequest, callback: (error: grpc.ServiceError | null, response: service_a_servicea_pb.PingResponse) => void): grpc.ClientUnaryCall;
    ping(request: service_a_servicea_pb.PingRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: service_a_servicea_pb.PingResponse) => void): grpc.ClientUnaryCall;
    ping(request: service_a_servicea_pb.PingRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: service_a_servicea_pb.PingResponse) => void): grpc.ClientUnaryCall;
}

export class ServiceAClient extends grpc.Client implements IServiceAClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public ping(request: service_a_servicea_pb.PingRequest, callback: (error: grpc.ServiceError | null, response: service_a_servicea_pb.PingResponse) => void): grpc.ClientUnaryCall;
    public ping(request: service_a_servicea_pb.PingRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: service_a_servicea_pb.PingResponse) => void): grpc.ClientUnaryCall;
    public ping(request: service_a_servicea_pb.PingRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: service_a_servicea_pb.PingResponse) => void): grpc.ClientUnaryCall;
}
