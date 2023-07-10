package main

import (
	"os"
	"strconv"

	log "github.com/sirupsen/logrus"
)

type Config struct {
	Port         int
	ServiceBHost string
}

func NewConfig() *Config {
	port, err := strconv.Atoi(getEnv("PORT"))
	if err != nil {
		log.Fatalf("Cannot convert port to int")
	}

	return &Config{
		Port:         port,
		ServiceBHost: getEnv("SERVICE_B_HOST"),
	}
}

func getEnv(key string) string {
	val := os.Getenv(key)

	if val == "" {
		log.Fatalf("Environment variable %s not found", key)
	}

	return val
}
