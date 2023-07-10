package apiserver

import (
	"context"
	"fmt"

	"github.com/jponc/protos/grpc-rest-demo/compiled-go/grpcrestdemopb"
)

type ApiServer struct {
	grpcrestdemopb.UnimplementedServiceAServer
	serviceBClient grpcrestdemopb.ServiceBClient
}

func NewApiServer(serviceBClient grpcrestdemopb.ServiceBClient) *ApiServer {
	return &ApiServer{
		serviceBClient: serviceBClient,
	}
}

func (s *ApiServer) Ping(ctx context.Context, in *grpcrestdemopb.PingRequest) (*grpcrestdemopb.PingResponse, error) {
	pongRequest := grpcrestdemopb.PongRequest{Message: fmt.Sprintf("Hello %s from service A", in.Name)}
	pongResponse, err := s.serviceBClient.Pong(ctx, &pongRequest)
	if err != nil {
		return nil, fmt.Errorf("failed to get pong from service B: %v", err)
	}

	return &grpcrestdemopb.PingResponse{Out: fmt.Sprintf("%s ... Done", pongResponse.Out)}, nil
}
