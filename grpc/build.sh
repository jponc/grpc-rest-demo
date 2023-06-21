#!/bin/bash
# protoc --plugin=$(npm root)/.bin/protoc-gen-ts_proto \
#  --ts_proto_out=service-a/src/proto \
#  --ts_proto_opt=outputServices=grpc-js \
#  --ts_proto_opt=esModuleInterop=true \
#  -I=protos/src/ protos/src/**/*.proto

# protoc --plugin=$(npm root)/.bin/protoc-gen-ts_proto \
#  --ts_proto_out=service-b/src/proto \
#  --ts_proto_opt=outputServices=grpc-js \
#  --ts_proto_opt=esModuleInterop=true \
#  -I=protos/src/ protos/src/**/*.proto
#

# Path to this plugin
# PROTOC_GEN_TS_PATH="./node_modules/.bin/protoc-gen-ts"

# # Directory to write generated code to (.js and .d.ts files)
# OUT_DIR="./service-a/src/proto"

# protoc \
#     --plugin="protoc-gen-ts=${PROTOC_GEN_TS_PATH}" \
#     --js_out="import_style=commonjs,binary:${OUT_DIR}" \
#     --ts_out="service=grpc-node,mode=grpc-js:${OUT_DIR}" \
#     -I=protos/src/ protos/src/**/*.proto



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
