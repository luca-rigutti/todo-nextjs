up:
	docker-compose up -d

rebuild:
	docker-compose up -d --build

bash:
	docker-compose exec -it nextjs-todo bash