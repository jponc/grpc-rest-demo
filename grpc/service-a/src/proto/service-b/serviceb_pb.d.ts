// package: servicebpb
// file: service-b/serviceb.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";

export class PongRequest extends jspb.Message { 
    getMessage(): string;
    setMessage(value: string): PongRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PongRequest.AsObject;
    static toObject(includeInstance: boolean, msg: PongRequest): PongRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PongRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PongRequest;
    static deserializeBinaryFromReader(message: PongRequest, reader: jspb.BinaryReader): PongRequest;
}

export namespace PongRequest {
    export type AsObject = {
        message: string,
    }
}

export class PongResponse extends jspb.Message { 
    getOut(): string;
    setOut(value: string): PongResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PongResponse.AsObject;
    static toObject(includeInstance: boolean, msg: PongResponse): PongResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PongResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PongResponse;
    static deserializeBinaryFromReader(message: PongResponse, reader: jspb.BinaryReader): PongResponse;
}

export namespace PongResponse {
    export type AsObject = {
        out: string,
    }
}
