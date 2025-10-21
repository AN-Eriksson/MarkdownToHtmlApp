# MarkdownToHtmlApp

Small React + Vite app that converts Markdown to HTML and can translate Markdown text between languages.

The app uses the @an-eriksson/markup-converter module for Markdown conversion.

## Features
- Convert Markdown to HTML (client-side)  
- Translate Markdown text between a few different languages
- Upload `.md` files and load content into the editor

## Deployed version
[Translator](https://translator.andreaseriksson.me)

## Quick start

Install
```bash
npm install
```

Run dev server
```bash
npm run dev
```

## Usage
- Type or paste Markdown into the editor.
- Choose mode in the toolbar: Translate or Markdown → HTML.
- Upload a `.md` file with the Upload button to populate the editor.
- Click Translate / Convert to run processing.
- Use Copy to copy the active output (translation or HTML) to clipboard.

## Files & architecture
- src/components — presentational components (TextInputField, Toolbar, LanguagePicker, outputs, etc.)
- src/lib — classes that handle specific functionality (MarkdownDocument, LanguagePair, CopyManager, ConversionManager, TranslationManager)
- src/hooks — custom hooks that manage async work and state (`useConvert`, `useTranslate`)
- Uploaded `.md` files are read via a FileReader-based parser and injected into the editor state as a MarkdownDocument object.

## Configuration
- The translation manager uses an injected translation function. Check `src/lib/TranslationManager.js` to configure which translation provider to use.
- Clipboard functions require a secure context (https or localhost) for navigator.clipboard to work reliably, otherwise the copying will fail.

## Docker
A docker-compose file is included in this repo.

Start the development container:
```bash
# from repo root
docker compose -f docker-compose.yml up --build -d
```

The compose setup runs the Vite dev server and maps port 5173. Open http://localhost:5173 in your browser.

Stop and remove containers:
```bash
docker compose down
```

## CI / CD (deploy.yml)

A GitHub Actions workflow is provided to build and deploy the app on an Ubuntu server on pushes to the main branch.

See ``deploy.yml`` for more information.

## Wiki

See the project Wiki for additional information.