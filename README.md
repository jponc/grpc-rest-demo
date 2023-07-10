# grpc-rest-demo

This test facilitates the difference between gRPC and REST (and potentially graphQL)

# Basic implementation

Client ->
 /hello (Service A) ->
   /hello (Service B)

# Running the servers

```sh
# This runs the rest servers
make run_rest

# This runs the node gRPC servers
make run_grpc_js

# This runs the Go gRPC servers
make run_grpc_go
```

# Running the k6 loadtest

```sh
# This installs the k6 load testing tool
brew install k6

# This runs rest k6 tests
make run_k6_rest

# This runs grpc JS k6 tests
make run_k6_grpc_js

# This runs grpc Go k6 tests
make run_k6_grpc_go
```
