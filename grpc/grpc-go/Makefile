run_a:
	cd service-a && PORT=7070 SERVICE_B_HOST=0.0.0.0:7071 go run cmd/api/*.go

run_b:
	cd service-b && PORT=7071 go run cmd/api/*.go

run:
	make -j 2 \
		run_a \
		run_b
