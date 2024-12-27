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

## Installazione

Clona il repository:
   ```bash
   git clone <repository-url>
   cd budget-manager
   ```

### Esecuzione con Docker

Per poter avviare l'applicazione dockerizzata in locale devi installare Orbstack (consigliato) oppure Docker Desktop.

1. Avvia l'applicazione in modalità sviluppo:
   ```bash
   make start
   ```

2. Accedi all'applicazione su `http://localhost:3010`.

## Struttura del Progetto

- **`/pages`**: Pagine principali dell'app (es. Home, Report).
- **`/components`**: Componenti UI come liste e moduli di transazione.
- **`/server/api`**: API backend per la gestione delle transazioni.
- **`prisma/schema.prisma`**: Definizione del database e dei modelli.

## Estensioni Future

- Autenticazione utenti (es. con Supabase Auth).
- Notifiche push o via email per raggiungimento soglie di spesa.
- Backup automatico dei dati.

---

### Contributi

Le contribuzioni sono benvenute! Sentiti libero di aprire issue o pull request per migliorare il progetto.

### Licenza

Questo progetto è rilasciato sotto la licenza GPL.
