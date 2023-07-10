package server

import (
	"fmt"
	"net"

	"github.com/jponc/protos/grpc-rest-demo/compiled-go/grpcrestdemopb"

	log "github.com/sirupsen/logrus"

	"google.golang.org/grpc"
)

type Server struct {
	serviceBServer grpcrestdemopb.ServiceBServer
}

func NewServer(serviceBServer grpcrestdemopb.ServiceBServer) *Server {
	return &Server{serviceBServer: serviceBServer}
}

func (s *Server) Serve(port int) error {
	// Create listener
	lis, err := net.Listen("tcp", fmt.Sprintf(":%d", port))
	if err != nil {
		log.Fatalf("failed to listen: %v", err)
	}
	log.Printf("server listening at %v", lis.Addr())

	// Create gRPC server
	grpcServer := grpc.NewServer()

	// Register servers
	grpcrestdemopb.RegisterServiceBServer(grpcServer, s.serviceBServer)

	// Server gRPC
	if err := grpcServer.Serve(lis); err != nil {
		log.Fatalf("failed to serve: %v", err)
	}

	return nil
}
