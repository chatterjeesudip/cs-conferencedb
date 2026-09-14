# Data Tables

A small static site with 5 tabs. Each tab shows a table with six columns:
`H1`, `H2`, `H3`, `H4`, `H5`, `H6`. Dark theme, responsive from phone up to desktop.

## Project structure

```
heading-tables/
├── index.html      # markup: tab buttons + 5 table panels
├── css/style.css   # dark theme, layout, responsive rules
├── js/script.js    # tab switching (click + arrow-key navigation)
└── README.md
```

## Editing content

- **Tab labels** — in `index.html`, change the text inside each `<button class="tab" ...>Tab 1</button>`.
- **Table rows** — each `<section class="panel" id="tab-N">` has its own `<tbody>`.
  Copy a `<tr>...</tr>` block to add a row, or edit the `<td>` text to change values.
  Each `<td>` has a `data-label="H1"` (etc.) attribute — keep these in sync with the
  column, since they're what the phone layout uses to show labels next to values.
- **Column headers** are fixed as H1–H6 in every table's `<thead>`.

## Running it locally

No build step — it's plain HTML/CSS/JS. Just open `index.html` in a browser, or serve it:

```bash
python3 -m http.server 8000
# then visit http://localhost:8000
```

## Publishing with git + GitHub Pages

```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/<your-username>/<your-repo>.git
git push -u origin main
```

Then on GitHub: **Settings → Pages → Source → Deploy from branch → main / (root)**.
Your site will be live at `https://<your-username>.github.io/<your-repo>/`.

## Responsive behavior

- **Desktop / tablet (≥560px):** standard table with header row.
- **Phone (<560px):** each row becomes a stacked card, with the H1–H6 label shown
  next to its value (no horizontal scrolling needed).
