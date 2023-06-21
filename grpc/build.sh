#!/bin/bash

# service A
OUT_DIR="./service-a/src/proto"

# generate js codes via grpc-tools
grpc_tools_node_protoc \
--js_out=import_style=commonjs,binary:${OUT_DIR} \
--grpc_out=grpc_js:${OUT_DIR} \
--plugin=protoc-gen-grpc=`which grpc_tools_node_protoc_plugin` \
-I ./protos/src/ \
./protos/src/**/*.proto

# generate d.ts codes
protoc \
--plugin=protoc-gen-ts=./node_modules/.bin/protoc-gen-ts \
--ts_out=grpc_js:${OUT_DIR} \
-I ./protos/src/ \
./protos/src/**/*.proto

# service B
OUT_DIR="./service-b/src/proto"

# generate js codes via grpc-tools
grpc_tools_node_protoc \
--js_out=import_style=commonjs,binary:${OUT_DIR} \
--grpc_out=grpc_js:${OUT_DIR} \
--plugin=protoc-gen-grpc=`which grpc_tools_node_protoc_plugin` \
-I ./protos/src/ \
./protos/src/**/*.proto

# generate d.ts codes
protoc \
--plugin=protoc-gen-ts=./node_modules/.bin/protoc-gen-ts \
--ts_out=grpc_js:${OUT_DIR} \
-I ./protos/src/ \
./protos/src/**/*.proto
