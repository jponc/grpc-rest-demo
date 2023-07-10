package main

import (
	"os"
	"strconv"

	log "github.com/sirupsen/logrus"
)

type Config struct {
	Port int
}

func NewConfig() *Config {
	port, err := strconv.Atoi(getEnv("PORT"))
	if err != nil {
		log.Fatalf("Cannot convert port to int")
	}

	return &Config{
		Port: port,
	}
}

func getEnv(key string) string {
	val := os.Getenv(key)

	if val == "" {
		log.Fatalf("Environment variable %s not found", key)
	}

	return val
}
