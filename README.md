# portfolio

Personal portfolio for Unathi Dlamini. Next.js 16, Tailwind CSS v4 and Motion, with a dark brutalist look (Archivo Black and Inter, royal blue accent, hard edges).

## Run it

```bash
npm install
npm run dev     # http://localhost:3000
npm run build
```

## Edit content

- `src/lib/site.ts`: name, links, summary, skills, education, certifications.
- `src/lib/work.ts`: projects. Each one becomes a card on the home page and a case study at `/work/<slug>` (context, what I did, result).
- `src/app/globals.css`: colours and fonts live in the `:root` variables at the top.

## Deploy

Import the repo on [Vercel](https://vercel.com/new). It deploys on every push to `main`. Set `NEXT_PUBLIC_SITE_URL` to the final address (for example a custom domain) so the sitemap and link previews use it.
