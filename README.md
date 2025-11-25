# vsevvy.com — Portfolio (Next.js App Router)

A fast, minimal portfolio built with **Next.js 16 (App Router)**, **TypeScript**, **Tailwind CSS v3**, and **MDX**. Deployed on **Vercel** and served at **[https://vsevvy.com](https://vsevvy.com)**.

> Note: Email sending has been removed for now. The `/contact` page renders a client form UI without server-side delivery. A future provider can be plugged in via `app/api/contact/route.ts`.

---

## Tech Stack

* **Framework:** Next.js 16 (App Router) + TypeScript
* **Styling:** Tailwind CSS v3, PostCSS, Autoprefixer
* **Design tokens:** CSS variables in `app/globals.css` mapped in `tailwind.config.ts` (e.g., `bg-background`, `text-foreground`, `border-border`)
* **Content:** MDX for case studies (`page.mdx` per project)
* **Images:** `next/image`, static assets in `public/`
* **SEO:** Next `metadata` API + native `app/sitemap.ts`
* **Deploy:** Vercel (production + preview deployments)

---

## Requirements

* Node.js 18+
* pnpm / npm / yarn (examples use **npm**)

---

## Getting Started

```bash
# 1) Install deps
npm i

# 2) Start dev server
npm run dev
# http://localhost:3000
```

### Scripts

```json
{
  "dev": "next dev",
  "build": "next build",
  "start": "next start",
  "lint": "next lint"
}
```

---

## Project Structure

```
app/
  layout.tsx            # global HTML shell + metadata
  globals.css           # Tailwind layers + CSS variables + background styles
  page.tsx              # Home: hero + projects section (conditional "Coming soon")
  sitemap.ts            # Native sitemap built from lib/projects.ts
  contact/
    page.tsx            # Contact page UI (no server send wired)
  api/
    contact/route.ts    # Placeholder route (safe to remove if unused)
  projects/
    page.tsx            # Projects index grid (or "Coming soon")
    jsonld.tsx          # JSON-LD helper for project pages
    <slug>/
      page.mdx          # Example MDX project page(s)
components/
  sections/Hero.tsx     # Hero component
  ProjectCard.tsx       # Project card for grids
lib/
  projects.ts           # Source of truth for project list (slug, title, summary, ogImage)
public/
  og.png                # Default Open Graph image
  <assets>.png          # Project images
```

---

## Styling & Theme

* Global tokens live in **`app/globals.css`** under `@layer base { :root { … } }`.
* Tailwind maps them in **`tailwind.config.ts`** so utilities work:

  * `bg-background`, `text-foreground`, `border-border`, etc.
* The site’s purple gradient background is defined on `body` in `globals.css`.
* Component styles are mostly Tailwind classes inline in JSX.

**Change colours**: edit token values in `globals.css` → rebuild.
**Change layout/spacing**: tweak Tailwind classes in the relevant component/page files.

---

## Content & Routing

* **Home (`/`)** – `app/page.tsx`
* **Projects (`/projects`)** – `app/projects/page.tsx`
* **Project details** – `app/projects/<slug>/page.mdx` (MDX)
* **Contact (`/contact`)** – `app/contact/page.tsx`

### Add a project

1. Create `app/projects/<your-slug>/page.mdx` with your case study content (and optional `export const metadata = { ... }`).
2. Append an entry to `lib/projects.ts` so it appears on the grids and sitemap:

```ts
export const projects = [
  { slug: "your-slug", title: "Title", summary: "Short blurb", ogImage: "/your-og.png" },
];
```

> If `projects` is empty, the UI shows a **“Projects coming soon.”** panel on home and `/projects`.

### Add a static page

Create `app/<route>/page.tsx` or `.mdx`:

```tsx
export const metadata = { title: "About — vsevvy" };
export default function AboutPage() {
  return <main className="prose mx-auto px-6 py-16"><h1>About</h1></main>;
}
```

---

## SEO

* **Global metadata** in `app/layout.tsx` (set `metadataBase` to `https://vsevvy.com`).
* **Per-page metadata** via `export const metadata = { ... }` in `page.tsx`/`.mdx`.
* **JSON-LD** for projects via `app/projects/jsonld.tsx` imported in MDX pages.
* **Sitemap** via native `app/sitemap.ts` which enumerates static routes and `lib/projects.ts` entries.

---

## Images & OG

* Put assets in `public/` and reference with `/path.ext`.
* Use `next/image` for responsive, optimized images.
* Default OG image lives at `public/og.png`; override per page via metadata.

---

## Deployment (Vercel)

1. Push to GitHub.
2. Import the repo in Vercel → it auto-detects Next.js.
3. Add custom domain **vsevvy.com** in **Project → Settings → Domains**.
4. Point DNS:

   * Apex `vsevvy.com` → A record `76.76.21.21`
   * `www.vsevvy.com` → CNAME `cname.vercel-dns.com`
5. Set **Primary** domain and add a 308 redirect from the non-primary host.

---

## Troubleshooting

* **White/black theme even after editing tokens**: check `app/layout.tsx` doesn’t hardcode `bg-white text-gray-900`. Use `text-foreground` (and optionally `bg-background`).
* **Tailwind token classes not found (e.g., `border-border`)**: ensure `tailwind.config.ts` includes the token mapping **and** the file is committed (CI needs it). Confirm `content` globs include `./app/**/*.{ts,tsx,mdx}` and `./components/**/*.{ts,tsx}`.
* **MDX import/path errors**: from `app/projects/<slug>/page.mdx`, import helpers with relative paths (e.g., `import ProjectJsonLd from '../jsonld'`).
* **Vercel build picks wrong sitemap approach**: use **either** native `app/sitemap.ts` **or** `next-sitemap`—not both.

---

## Housekeeping

* Lint/format via ESLint + your editor settings.
* `.gitignore` should **not** ignore required build configs (`tailwind.config.ts`, `postcss.config.*`, `next.config.*`).

---

## Roadmap

* Re-introduce email delivery on `/contact` via a provider (Resend, Postmark, etc.).
* Add more projects and optional blog (`app/blog/<slug>/page.mdx`).
* Extract a small design system (buttons/cards) using the existing token scheme.

---

## License

MIT (or your preference).

