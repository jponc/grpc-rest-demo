package apiserver

import (
	"context"
	"fmt"

	"grpc-go-service-b/internal/servicebpb"
)

type ApiServer struct {
	servicebpb.UnimplementedServiceBServer
}

func NewApiServer() *ApiServer {
	return &ApiServer{}
}

func (s *ApiServer) Pong(ctx context.Context, in *servicebpb.PongRequest) (*servicebpb.PongResponse, error) {
	out := fmt.Sprintf("%s; from service B!", in.Message)
	return &servicebpb.PongResponse{Out: out}, nil
}
