# Alligentics Website

Marketing site for Alligentics (AI voice agents, chatbots and CRM/workflow automation). Built with React 19, TanStack Start, Vite and Tailwind CSS v4.

## Development

This repository uses **Bun**.

```sh
bun install
bun run dev        # http://localhost:5173
bun run build
bun run preview
```

## Deploying on Cloudflare

`bun run build` builds the static site into `dist/` (via `scripts/make-dist.mjs`). `wrangler.jsonc` serves `dist/` through `worker.ts`, which also handles `POST /api/chat` and `POST /api/contact`.

- Build command: `bun run build` (or `npm run build`)
- Deploy command: `npx wrangler deploy`
- Add `GROQ_API_KEY` and `CONTACT_WEBHOOK_URL` as variables/secrets on the Cloudflare project.
- Local test: put them in `.dev.vars`, then `npx wrangler dev`.

## Environment variables

Copy `.env.example` to `.env` (locally) or set these in Vercel:

| Variable | Purpose |
| --- | --- |
| `GROQ_API_KEY` | Powers the "Ask Alligentics" chat assistant (`/api/chat`). Without it the chat shows a WhatsApp fallback. |
| `CONTACT_WEBHOOK_URL` | Any webhook accepting a JSON POST (n8n, Make, Zapier). Without it `/api/contact` returns 503 and the form falls back to the visitor's email app. |

### Contact webhook payload

```json
{
  "name": "...", "email": "...", "company": "...", "challenge": "...",
  "timeline": "...", "budget": "...",
  "source": "alligentics.com", "submittedAt": "2026-01-01T00:00:00.000Z"
}
```

## Project structure

- `src/routes/index.tsx` — homepage composition and SEO metadata
- `src/components/home/` — homepage sections (header, hero + live demo, services, pipeline demo, brief/process/trust, pricing/team/FAQ, contact/footer, floating chat + WhatsApp)
- `src/hooks/use-motion.ts` — reduced-motion, in-view, count-up and timed-loop hooks
- `src/styles-v2.css` — design system (`x-` prefixed classes in `@layer components`)
- `worker.ts` — Cloudflare Worker: serves `dist/` and handles `/api/chat` and `/api/contact`
- `src/routes/api/` — equivalent handlers for hosts that run the app server-side (not used on Cloudflare)
- `src/components/marketing-page.tsx` — secondary marketing pages

## Design notes

- Dark navy base with an electric-blue to violet accent, glass cards and an aurora background.
- Motion is CSS-first (transform/opacity only). Scroll reveals use scroll-driven animations where supported; content stays visible elsewhere.
- `prefers-reduced-motion` shows finished states and stops all looping.
- Demo conversations and daily-brief numbers are illustrative samples and are labelled as such.
