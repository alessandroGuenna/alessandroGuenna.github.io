# Portfolio — Alessandro Guenna

Sito portfolio personale (ingegneria energetica, MATLAB & Python).
Sito statico: solo HTML, CSS e un po' di JavaScript. Nessun framework, nessuna build.

## Struttura dei file

| File            | A cosa serve                                             |
|-----------------|----------------------------------------------------------|
| `index.html`    | Contenuti del sito (testi, progetti, sezioni)            |
| `styles.css`    | Aspetto grafico (colori, font, layout)                   |
| `script.js`     | Piccole interazioni (menu mobile, anno nel footer)       |
| `.claude/`      | Configurazione per l'anteprima locale                    |

## Come modificare i contenuti

Quasi tutto quello che vorrai cambiare è in `index.html`:

- **Nome / testi**: cerca "Alessandro Guenna" e i vari paragrafi.
- **Progetti**: ogni progetto è un blocco `<article class="project-card">`.
  Duplica un blocco per aggiungerne uno nuovo, poi cambia titolo, descrizione,
  tag e i link `href="#"` (metti l'URL del repository GitHub).
- **Link GitHub / LinkedIn**: cerca `tuo-username` e `tuo-profilo` e sostituiscili.
- **CV**: cerca `id="cv-link"` e metti il percorso del tuo PDF (es. `cv.pdf`).

Per cambiare i colori: in `styles.css`, in alto, la variabile `--accent`
controlla il colore verde d'accento.

## Anteprima in locale

Serve Python installato. Dalla cartella del progetto:

```bash
python -m http.server 5173
```

Poi apri `http://localhost:5173` nel browser.

## Pubblicazione (GitHub Pages)

1. Crea un repository su GitHub (es. `portfolio`).
2. Carica questi file nel repository.
3. Settings → Pages → Source: branch `main`, cartella `/root`.
4. Il sito sarà online su `https://alessandroguenna.github.io/portfolio/`.
5. (Opzionale) Collega un dominio personalizzato aggiungendo un file `CNAME`.
