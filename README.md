# Amogh Gupta — personal website

Source for [fierydeveloper.github.io/AmoghGupta](https://fierydeveloper.github.io/AmoghGupta/).

MS Computer Science at UNC Chapel Hill — LLM alignment, safe-helpfulness, and responsible AI.

## Editing content

| What                      | Where                                        |
| ------------------------- | -------------------------------------------- |
| Bio, profile photo, links | `_pages/about.md`, `assets/img/prof_pic.jpg` |
| Publications              | `_bibliography/papers.bib`                   |
| Projects                  | `_projects/*.md`                             |
| News / announcements      | `_news/*.md`                                 |
| Teaching                  | `_teachings/*.md`                            |
| CV (rendered page)        | `_data/cv.yml`                               |
| CV (PDF download)         | `assets/pdf/AmoghGupta_CV.pdf`               |
| Social links, email       | `_data/socials.yml`                          |
| Site title, URL, features | `_config.yml`                                |

## Local development

```bash
bundle install
bundle exec jekyll serve   # http://localhost:4000/AmoghGupta/
```

Note the `/AmoghGupta` baseurl — the site renders unstyled with broken links if it is blanked out.

Before pushing:

```bash
npm run lint:prettier      # npx prettier . --write to fix
```

## Deployment

`.github/workflows/deploy.yml` builds and publishes to GitHub Pages on push to `main`.

## Template

Built on [al-folio](https://github.com/alshedivat/al-folio) v1.x, a thin Jekyll starter whose runtime
lives in versioned gems. Template documentation is in [`docs/`](docs/); agent-facing notes are in
[`AGENTS.md`](AGENTS.md) and [`CLAUDE.md`](CLAUDE.md).
