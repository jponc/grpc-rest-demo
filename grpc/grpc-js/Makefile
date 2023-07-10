run_a:
	cd service-a && npm run build && SERVICE_B_HOST=0.0.0.0:9091 PORT=9090 npm run start

run_b:
	cd service-b && npm run build && PORT=9091 npm start

run:
	make -j 2 \
		run_a \
		run_b
