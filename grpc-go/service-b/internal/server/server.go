package server

import (
	"fmt"
	"net"

	"grpc-go-service-b/internal/servicebpb"

	log "github.com/sirupsen/logrus"

	"google.golang.org/grpc"
)

type Server struct {
	serviceBServer servicebpb.ServiceBServer
}

func NewServer(serviceBServer servicebpb.ServiceBServer) *Server {
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
	servicebpb.RegisterServiceBServer(grpcServer, s.serviceBServer)

	// Server gRPC
	if err := grpcServer.Serve(lis); err != nil {
		log.Fatalf("failed to serve: %v", err)
	}

	return nil
}
