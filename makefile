# Nome dell'immagine Docker
IMAGE_NAME = budget-manager-fe

# Avvia l'applicazione in modalità sviluppo
start:
	docker compose up -d
	docker exec -it $(IMAGE_NAME) npm run dev

# Avvia una shell bash nel container
start_bash:
	docker compose up -d
	docker exec -it $(IMAGE_NAME) bash

# Ferma il container
stop:
	docker compose stop

# Ferma e rimuove il container
down:
	docker compose down

logs:
	docker logs ${IMAGE_NAME}