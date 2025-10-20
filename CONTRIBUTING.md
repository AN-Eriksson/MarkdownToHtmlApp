# Contributing

Thanks for wanting to contribute. This document describes a simple process for reporting bugs, developing features, and submitting pull requests for MarkdownToHtmlApp.

## Overview
- Keep changes small and focused.
- Run lint, format and tests before opening a PR.
- Use clear commit messages and PR descriptions.

## Report bugs / suggest features
- Open an issue in the repository.
- Include steps to reproduce, expected vs actual behaviour, and any error messages.
- Add your Node.js version and OS if relevant.

## Local development
From the repo root:
```bash
npm install
npm run dev
```
Open http://localhost:5173.

## Development with Docker
A docker-compose file is included for development. Start the dev container:
```bash
docker compose up --build
```
The dev server is typically available at port 5173.

## Code quality & tests
Run before committing:
```bash
npm run lint    # check lint
npm run format  # format code
```

## Pull request process
1. Fork the repo and create a feature branch.
2. Implement changes and add tests when appropriate.
3. Run lint/format/tests locally.
4. Open a PR against `main` with a clear title and description.
5. Explain what changed and why in the PR body.

## Pre-PR checklist
- [ ] Lint passes
- [ ] Code is formatted
- [ ] Tests pass
- [ ] PR description explains the change

## CI / CD
A GitHub Actions workflow (`.github/workflows/deploy.yml`) builds and deploys the app.

## Contact
If in doubt, open an issue or ask in the PR comments.

Thanks - and happy coding!