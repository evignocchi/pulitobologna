# PulitoBologna

Sito web di PulitoBologna, impresa di pulizie a Bologna e nei comuni limitrofi. Build su Next.js (App Router) + Tailwind CSS.

## Sviluppo

```bash
npm install
npm run dev
```

Apri [http://localhost:3000](http://localhost:3000).

## Struttura

- `src/app` — pagine (homepage, `/servizi`, le 6 landing page di servizio, `/contatti`, policy) e l'API route placeholder `/api/preventivo`.
- `src/components` — componenti UI riutilizzabili (header, footer, sezioni, form preventivo, FAQ, ecc.).
- `src/lib` — dati di contenuto condivisi (servizi, FAQ, info azienda/contatti).

## Contenuti da completare

- Numero di telefono, WhatsApp ed email reali (attualmente placeholder in `src/lib/site.ts`).
- Testo legale di Privacy Policy e Cookie Policy.
- Integrazione reale del form preventivo (`src/app/api/preventivo/route.ts` è un punto di integrazione placeholder: valida i dati e li logga, pronto per essere collegato a un servizio email/CRM).
- Immagini reali del brand (attualmente sostituite da un sistema visivo a placeholder).

## Build di produzione

```bash
npm run build
npm run start
```
