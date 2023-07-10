install_a:
	cd service-a && npm install

install_b:
	cd service-b && npm install

run_a: install_a
	cd service-a && npm run build && SERVICE_B_HOST=http://localhost:8081 PORT=8080 npm run start

run_b: install_b
	cd service-b && npm run build && PORT=8081 npm run start

run:
	make -j 2 \
		run_a \
		run_b
