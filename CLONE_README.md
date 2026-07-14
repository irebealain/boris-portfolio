# Site Clone

Static offline clone of [https://www.mugishaboris.com/](https://www.mugishaboris.com/), captured with a headless-browser scraper (fully-rendered DOM + assets).

## View it

This site ships JavaScript as ES modules (`<script type="module">`). Browsers refuse to run module scripts loaded from a `file://` URL (a CORS restriction, not a bug in this clone) — double-clicking `index.html` will show an unstyled or blank page. You must serve it over HTTP:

```bash
npx serve .
```

then open the printed `http://localhost:...` URL.

## Notes

- This is a static snapshot for personal/reference use. Interactive features that depend on the original site's live backend (cart, search, filters) will not function.
- Cloned on 2026-07-03.
