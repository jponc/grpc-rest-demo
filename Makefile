run_grpc_go:
	cd grpc/grpc-go && make run

run_grpc_js:
	cd grpc/grpc-js && make run

run_rest:
	cd rest && make run

run_k6_rest:
	k6 run loadtest/rest.js

run_k6_grpc_js:
	k6 run loadtest/grpc-js.js

run_k6_grpc_go:
	k6 run loadtest/grpc-go.js
