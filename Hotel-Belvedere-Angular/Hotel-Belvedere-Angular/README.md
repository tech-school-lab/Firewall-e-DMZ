# Hotel Belvedere – guida all'interrogazione (Angular)

Questa cartella contiene la conversione del file HTML originale in una piccola applicazione Angular standalone.

## Cosa è stato separato

- `src/app/app.component.html`: struttura HTML originale della pagina.
- `src/styles.css`: foglio CSS originale, trasferito senza rifare il design.
- `src/assets/guide.js`: motore JavaScript originale, con la stessa base dati, i testi, il glossario, la topologia animata, la navigazione e le interazioni. È stato solo racchiuso in una funzione di inizializzazione per avviarlo dopo il rendering Angular e fermare l'animazione quando il componente viene distrutto.
- `src/app/app.component.ts`: componente Angular che carica e chiude il motore.
- `originale/Hotel-Belvedere-originale.html`: copia intatta del file ricevuto, conservata come backup.

Non sono stati riscritti né abbreviati i contenuti della guida e non è stato applicato un nuovo design.

## Avvio in Codespaces

```bash
npm install
npm start
```

Apri la porta 4200 quando Codespaces propone il collegamento.

## Build per GitHub Pages

```bash
npm install
npm run build:pages
```

La cartella generata è `dist/hotel-belvedere/browser`. Per pubblicare con GitHub Actions, il workflow deve caricare questa cartella come artifact Pages, non la root del repository.

## Inserimento in un progetto Angular già esistente

Se il repository contiene già un progetto Angular, non sostituire `angular.json`, `package.json` o `tsconfig` alla cieca. Copia invece:

1. `src/app/app.component.html`
2. `src/app/app.component.ts`
3. `src/assets/guide.js`
4. il contenuto di `src/styles.css` nel foglio globale del progetto

Poi verifica che il componente sia quello avviato da `src/main.ts` oppure integralo nella pagina desiderata.
