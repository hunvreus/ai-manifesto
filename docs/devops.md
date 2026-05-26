# Deployment

This site deploys as a Cloudflare Worker using Workers Static Assets. It is not a Cloudflare Pages project.

## Local validation

```sh
npm ci
npm run build
npm run deploy:dry-run
```

## Manual deploy

```sh
npm run deploy
```

Wrangler deploys the static files generated in `dist/` using `wrangler.jsonc`.

## GitHub-connected deploy

In Cloudflare:

1. Go to Workers & Pages.
2. Create application.
3. Import repository.
4. Select `hunvreus/ai-manifesto`.
5. Use Worker name `ai-manifesto`.
6. Set production branch to `main`.
7. Set root directory to `/`.
8. Set build command to `npm run build`.
9. Set deploy command to `npx wrangler deploy`.
10. Set `SITE_URL` to `https://ronanberder.com/ai-manifesto/`.

Cloudflare requires the Worker name in the dashboard to match the `name` field in `wrangler.jsonc`.

The production route is `ronanberder.com/ai-manifesto*`. The built files are nested under `dist/ai-manifesto/` because Workers Static Assets expects assets to mirror the subpath route.

## Rollback

Use the Worker deployment history in Cloudflare to roll back to a previous version.
