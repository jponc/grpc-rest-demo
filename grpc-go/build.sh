#!/bin/bash

OUT_DIR="./service-a/internal"

protoc --go_out=${OUT_DIR} --go-grpc_out=${OUT_DIR} ./protos/service-a/servicea.proto
protoc --go_out=${OUT_DIR} --go-grpc_out=${OUT_DIR} ./protos/service-b/serviceb.proto

OUT_DIR="./service-b/internal"

protoc --go_out=${OUT_DIR} --go-grpc_out=${OUT_DIR} ./protos/service-a/servicea.proto
protoc --go_out=${OUT_DIR} --go-grpc_out=${OUT_DIR} ./protos/service-b/serviceb.proto
