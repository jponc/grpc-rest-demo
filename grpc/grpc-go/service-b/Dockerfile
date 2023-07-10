FROM golang:1.19-alpine AS build

WORKDIR /app

COPY go.mod ./
COPY go.sum ./

RUN go mod download

COPY . .

RUN CGO_ENABLED=0 GOARCH=arm64 GOOS=linux go build -o app cmd/api/main.go cmd/api/config.go

FROM arm64v8/alpine AS final
LABEL maintainer="ponce.julianalfonso@gmail.com"
COPY --from=build /app/app /app

CMD [ "/app" ]
