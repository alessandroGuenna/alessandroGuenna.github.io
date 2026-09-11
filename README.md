# Portfolio — Alessandro Guenna

Personal portfolio website (energy engineering, MATLAB & Python).
Static site: plain HTML, CSS and a little JavaScript. No framework, no build.

## File structure

| File            | Purpose                                                  |
|-----------------|----------------------------------------------------------|
| `index.html`    | Site content (text, projects, sections)                  |
| `styles.css`    | Look and feel (colours, fonts, layout)                   |
| `script.js`     | Small interactions (mobile menu, year in the footer)     |
| `projects/`     | Project detail pages and their assets                    |
| `.claude/`      | Local preview configuration                              |

## Editing the content

Almost everything you may want to change is in `index.html`:

- **Name / text**: search for "Alessandro Guenna" and the various paragraphs.
- **Projects**: each project is an `<article class="project-card">` block.
  Duplicate a block to add a new one, then change title, description, tags and
  the `href` links (point them to the GitHub repository).
- **GitHub / LinkedIn links**: search for the URLs and replace them.
- **CV**: search for `id="cv-link"` and set the path of your PDF.

To change the colours: in `styles.css`, near the top, the `--accent` variable
controls the accent colour.

## Local preview

Python required. From the project folder:

```bash
python -m http.server 5173
```

Then open `http://localhost:5173` in your browser.

## Publishing (GitHub Pages)

1. This site is published from the `alessandroGuenna.github.io` repository.
2. Push the files to the `main` branch.
3. Settings → Pages → Source: branch `main`, folder `/root`.
4. The site goes live at `https://alessandroguenna.github.io/`.
5. (Optional) Connect a custom domain by adding a `CNAME` file.
