# Usa un'immagine ufficiale di Node.js come base
FROM node:18-alpine

# Crea e imposta la cartella di lavoro all'interno del container
WORKDIR /context/nuxt-app

# Copia tutti i file dell'applicazione
COPY ./src /context/nuxt-app/

# Installa le dipendenze
RUN npm install
