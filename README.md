# Personal Budget Manager
Un'applicazione per gestire il bilancio personale sviluppata con **Nuxt 3**, **Prisma**, **Vuetify**, e **SQLite**. Permette di aggiungere entrate e uscite, categorizzare transazioni, visualizzare il saldo totale e generare report grafici.

## Funzionalità

- **Aggiunta di Entrate e Uscite:** Registra facilmente le transazioni.
- **Visualizzazione del Saldo Totale:** Mostra il bilancio aggiornato in tempo reale.
- **Categorizzazione delle Transazioni:** Organizza per categorie come "Cibo" o "Trasporti".
- **Filtri e Report:** Visualizza le spese per categoria o periodo di tempo.
- **Grafici:** Analizza le tue finanze tramite grafici intuitivi.

## Tecnologie Utilizzate

- **Frontend:** Nuxt 3, Vuetify
- **Backend:** Nuxt 3 API, Prisma
- **Database:** SQLite (sviluppo), PostgreSQL o Supabase (produzione)
- **Grafici:** Chart.js, vue-chart-3
- **Containerizzazione:** Docker

## Requisiti

- Node.js >= 16
- npm >= 7
- Docker e Docker Compose

## Installazione

1. Clona il repository:
   ```bash
   git clone <repository-url>
   cd personal-budget-app
   ```

2. Installa le dipendenze:
   ```bash
   npm install
   ```

3. Configura il database:
   ```bash
   npx prisma init
   ```
   Aggiorna `prisma/schema.prisma` se necessario, quindi esegui la migrazione:
   ```bash
   npx prisma migrate dev --name init
   ```

4. Avvia il server di sviluppo:
   ```bash
   npm run dev
   ```

## Struttura del Progetto

- **`/pages`**: Pagine principali dell'app (es. Home, Report).
- **`/components`**: Componenti UI come liste e moduli di transazione.
- **`/server/api`**: API backend per la gestione delle transazioni.
- **`prisma/schema.prisma`**: Definizione del database e dei modelli.

## Utilizzo di Docker

### Configurazione Docker

1. Crea un file `Dockerfile` nella radice del progetto:
   ```dockerfile
   # Utilizza un'immagine Node.js come base
   FROM node:18

   # Imposta la directory di lavoro
   WORKDIR /app

   # Copia i file di progetto
   COPY package*.json ./
   
   # Installa le dipendenze
   RUN npm install

   # Copia il resto del codice
   COPY . .

   # Costruisce l'app per la produzione
   RUN npm run build

   # Espone la porta dell'app
   EXPOSE 3000

   # Comando di avvio
   CMD ["npm", "run", "start"]
   ```

2. Crea un file `docker-compose.yml` per gestire il container:
   ```yaml
   version: '3.8'

   services:
     app:
       build: .
       ports:
         - "3000:3000"
       volumes:
         - .:/app
         - /app/node_modules
       command: ["npm", "run", "dev"]
   ```

### Esecuzione con Docker

1. Costruisci l'immagine Docker:
   ```bash
   docker-compose build
   ```

2. Avvia l'applicazione:
   ```bash
   docker-compose up
   ```

3. Accedi all'applicazione su `http://localhost:3000`.

## Distribuzione

1. Costruisci il progetto:
   ```bash
   npm run build
   ```

2. Distribuisci su una piattaforma come Vercel o Netlify.
3. Configura un database di produzione (es. Supabase o PlanetScale).

## Estensioni Future

- Autenticazione utenti (es. con Supabase Auth).
- Notifiche push o via email per raggiungimento soglie di spesa.
- Backup automatico dei dati.

---

### Contributi

Le contribuzioni sono benvenute! Sentiti libero di aprire issue o pull request per migliorare il progetto.

### Licenza

Questo progetto è rilasciato sotto la licenza GPL.
