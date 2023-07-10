package apiserver

import (
	"context"
	"fmt"

	"github.com/jponc/protos/grpc-rest-demo/compiled-go/grpcrestdemopb"
)

type ApiServer struct {
	grpcrestdemopb.UnimplementedServiceBServer
}

func NewApiServer() *ApiServer {
	return &ApiServer{}
}

func (s *ApiServer) Pong(ctx context.Context, in *grpcrestdemopb.PongRequest) (*grpcrestdemopb.PongResponse, error) {
	out := fmt.Sprintf("%s; from service B!", in.Message)
	return &grpcrestdemopb.PongResponse{Out: out}, nil
}
