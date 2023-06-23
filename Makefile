local:
	make -j 6 \
		grpc-service-a \
		grpc-service-b \
		grpc-go-service-a \
		grpc-go-service-b \
		rest-service-a \
		rest-service-b

rest-service-a:
	cd rest/service-a && npm run build && SERVICE_B_HOST=http://localhost:8081 PORT=8080 npm run start

rest-service-b:
	cd rest/service-b && npm run build && PORT=8081 npm run start

grpc-service-a:
	cd grpc/service-a && npm run build && SERVICE_B_HOST=0.0.0.0:9091 PORT=9090 npm run start

grpc-service-b:
	cd grpc/service-b && npm run build && PORT=9091 npm run start

grpc-go-service-a:
	cd grpc-go/service-a && PORT=7070 SERVICE_B_HOST=0.0.0.0:7071 go run cmd/api/config.go cmd/api/main.go

grpc-go-service-b:
	cd grpc-go/service-b && PORT=7071 go run cmd/api/config.go cmd/api/main.go
