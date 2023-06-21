package apiserver

import (
	"context"
	"fmt"

	"grpc-go-service-a/internal/serviceapb"
	"grpc-go-service-a/internal/servicebpb"
)

type ApiServer struct {
	serviceapb.UnimplementedServiceAServer
	serviceBClient servicebpb.ServiceBClient
}

func NewApiServer(serviceBClient servicebpb.ServiceBClient) *ApiServer {
	return &ApiServer{
		serviceBClient: serviceBClient,
	}
}

func (s *ApiServer) Ping(ctx context.Context, in *serviceapb.PingRequest) (*serviceapb.PingResponse, error) {
	pongRequest := servicebpb.PongRequest{Message: fmt.Sprintf("Hello %s from service A", in.Name)}
	pongResponse, err := s.serviceBClient.Pong(ctx, &pongRequest)
	if err != nil {
		return nil, fmt.Errorf("failed to get pong from service B: %v", err)
	}

	return &serviceapb.PingResponse{Out: fmt.Sprintf("%s ... Done", pongResponse.Out)}, nil
}
