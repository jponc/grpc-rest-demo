package main

import (
	"grpc-go-service-b/internal/apiserver"
	"grpc-go-service-b/internal/server"

	log "github.com/sirupsen/logrus"
)

func main() {
	config := NewConfig()

	apiServer := apiserver.NewApiServer()

	s := server.NewServer(apiServer)
	err := s.Serve(config.Port)
	if err != nil {
		log.Fatalf("failed to server gRPC server: %v", err)
	}
}
