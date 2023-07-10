package main

import (
	"grpc-go-service-a/internal/apiserver"
	"grpc-go-service-a/internal/server"

	"github.com/jponc/protos/grpc-rest-demo/compiled-go/grpcrestdemopb"

	log "github.com/sirupsen/logrus"
	"google.golang.org/grpc"
	"google.golang.org/grpc/credentials/insecure"
)

func main() {
	config := NewConfig()

	var opts []grpc.DialOption
	opts = append(opts, grpc.WithTransportCredentials(insecure.NewCredentials()))

	serviceBConn, err := grpc.Dial(config.ServiceBHost, opts...)
	if err != nil {
		log.Fatalf("fail to dial: %v", err)
	}
	defer serviceBConn.Close()

	serviceBClient := grpcrestdemopb.NewServiceBClient(serviceBConn)

	apiServer := apiserver.NewApiServer(serviceBClient)

	s := server.NewServer(apiServer)
	err = s.Serve(config.Port)
	if err != nil {
		log.Fatalf("failed to server gRPC server: %v", err)
	}
}
