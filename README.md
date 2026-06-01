# Preethi R — Developer Portfolio

A premium, futuristic developer portfolio built with **React 19**, **TanStack Start**, **Tailwind CSS v4**, and **Framer Motion**. Designed with a black-and-white luxury aesthetic, glassmorphism effects, and cinematic animations to impress recruiters and showcase production-grade full-stack & AI projects.

![Portfolio Preview](https://preethiraghu.lovable.app)

## Live Site

**[https://preethiraghu.lovable.app](https://preethiraghu.lovable.app)**

---

## Tech Stack

| Layer | Technology |
|-------|------------|
| Framework | [TanStack Start](https://tanstack.com/start) (React 19 + Vite 7) |
| Styling | Tailwind CSS v4 + Custom CSS Variables |
| Animations | Framer Motion |
| UI Components | Radix UI + shadcn/ui |
| Icons | Lucide React |
| Build Tool | Vite 7 |

---

## Features

- **Premium Dark Theme** — Black & white luxury palette with glassmorphism cards
- **Custom Cursor** — Animated cursor with hover detection (desktop only)
- **Smooth Scroll Navigation** — Sticky nav with scroll progress indicator
- **Hero Section** — Typing animation with gradient text and social links
- **Tech Marquee** — Infinite scrolling tech stack banner
- **About Section** — Animated pillars with hover lift effects
- **Skills Grid** — Animated progress bars with hover glow
- **Projects Showcase** — Three production-grade projects with live demos & GitHub links
- **Achievements Timeline** — Alternating timeline layout with dot indicators
- **Contact Form** — Mailto-integrated form + direct contact links
- **Fully Responsive** — Optimized for mobile, tablet, and desktop
- **SEO Ready** — Meta tags, Open Graph, semantic HTML

---

## Project Structure

```
├── public/
│   └── Preethi_R_Resume.docx          # Downloadable resume
├── src/
│   ├── assets/
│   │   └── preethi.jpeg               # Profile image
│   ├── components/
│   │   ├── portfolio/                 # Portfolio sections
│   │   │   ├── About.tsx
│   │   │   ├── Achievements.tsx
│   │   │   ├── Contact.tsx
│   │   │   ├── Cursor.tsx
│   │   │   ├── Footer.tsx
│   │   │   ├── Hero.tsx
│   │   │   ├── Marquee.tsx
│   │   │   ├── Nav.tsx
│   │   │   ├── Projects.tsx
│   │   │   ├── SectionLabel.tsx
│   │   │   └── Skills.tsx
│   │   └── ui/                      # shadcn/ui components
│   ├── hooks/
│   ├── lib/                         # Utilities & server functions
│   ├── routes/
│   │   ├── __root.tsx               # Root layout
│   │   └── index.tsx                # Home page (all sections)
│   ├── router.tsx                   # Router config
│   ├── server.ts                    # SSR entry wrapper
│   ├── start.ts                     # Start config
│   └── styles.css                   # Global styles & design tokens
├── components.json                   # shadcn/ui config
├── package.json
├── tsconfig.json
├── vite.config.ts
└── README.md
```

---

## Projects Featured

| Project | Tech | Live Demo | GitHub |
|---------|------|-----------|--------|
| AI Interview Simulator | Next.js, FastAPI, LLaMA, DeepSeek | [Demo](https://my-project-a8cp792of-preethiragus-projects.vercel.app) | [Repo](https://github.com/PreethiRagu/ai-interview-simulator) |
| Agentic RAG System | Python, Qdrant, CrewAI, Streamlit | [Demo](https://agentic-rag-system-3gr6lrvk7qdrjmrihjmiks.streamlit.app/) | [Repo](https://github.com/PreethiRagu/agentic-rag-system) |
| AI Billing Suite | React, FastAPI, Firebase | [Demo](https://velur-spun-pipes.vercel.app/) | [Repo](https://github.com/PreethiRagu/Inventory-Management-with-ML-Integration) |

---

## Getting Started

### Prerequisites

- [Bun](https://bun.sh/) (recommended) or Node.js 20+

### Installation

```bash
# Clone the repository
git clone <repo-url>
cd tanstack_start_ts

# Install dependencies
bun install

# Start development server
bun run dev
```

The app will be available at `http://localhost:3000`.

### Build for Production

```bash
bun run build
```

### Preview Production Build

```bash
bun run preview
```

---

## Scripts

| Script | Description |
|--------|-------------|
| `bun run dev` | Start development server |
| `bun run build` | Build for production |
| `bun run build:dev` | Build in development mode |
| `bun run preview` | Preview production build |
| `bun run lint` | Run ESLint |
| `bun run format` | Format with Prettier |

---

## Design System

The portfolio uses a custom design system defined in `src/styles.css`:

- **Colors**: Semantic tokens (`--background`, `--foreground`, `--primary`, etc.)
- **Typography**: Geist font family (display + sans + mono)
- **Glassmorphism**: `glass` and `glass-strong` utility classes
- **Animations**: Custom keyframes for marquee, float, shimmer

---

## Customization

### Update Personal Info

Edit these files to personalize:

- **`src/components/portfolio/Hero.tsx`** — Name, tagline, social links
- **`src/components/portfolio/About.tsx`** — Bio, education, pillars
- **`src/components/portfolio/Skills.tsx`** — Tech skills & proficiency levels
- **`src/components/portfolio/Projects.tsx`** — Project cards, links, descriptions
- **`src/components/portfolio/Achievements.tsx`** — Awards & milestones
- **`src/components/portfolio/Contact.tsx`** — Email, social links, location
- **`src/components/portfolio/Footer.tsx`** — Footer text
- **`public/Preethi_R_Resume.docx`** — Replace with your resume
- **`src/assets/preethi.jpeg`** — Replace with your profile photo

### Update Colors

Modify CSS variables in `src/styles.css`:

```css
:root {
  --background: oklch(0.08 0.01 260);
  --foreground: oklch(0.97 0.005 260);
  /* ... */
}
```

---

## Deployment Guide

This project uses **TanStack Start** with SSR, so it needs a platform that supports server-side rendering or static output. Below are step-by-step guides for the most popular free hosting platforms.

> **Quick note:** Run `bun run build` (or `npm run build`) locally first to confirm the build succeeds before deploying.

---

### Option 1: Vercel (Recommended — Easiest)

This project uses **TanStack Start + Nitro (SSR)**, so it does NOT output a plain `dist/` folder for Vercel. If you deploy it as a plain Vite/static app, Vercel can show **404: NOT_FOUND**. Use the steps below exactly.

> `vite.config.ts` explicitly enables the Vercel Nitro preset, and `vercel.json` runs `npm run build`. Together they produce `.vercel/output/`, the folder Vercel serves natively. **Commit both files before deploying.**

#### Method A — Deploy via GitHub (Auto-deploy on every push)

1. **Push your code to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial portfolio commit"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
   git push -u origin main
   ```

2. **Go to [vercel.com](https://vercel.com)** → Sign up / Log in (free tier)

3. **Click "Add New Project"**

4. **Import your GitHub repository**
   - Search for your repo and click **Import**

5. **Configure project**
   - Framework Preset: **Other** (NOT Vite — Vite preset will cause a 404)
   - Build Command: leave **empty** (vercel.json already sets `npm run build`)
   - Output Directory: leave **empty** (Nitro writes to `.vercel/output/` automatically)
   - Install Command: leave **empty** (`npm install` from vercel.json)
   - Root Directory: `./` (default)
   - Click **Deploy**

6. **Done!** Vercel will build and deploy. You'll get a `.vercel.app` URL instantly.

7. **Optional:** Go to **Settings → Domains** to add a custom domain.

#### Troubleshooting: "404: NOT_FOUND" on Vercel

If you still see a 404 after deploy:
- Confirm both `vercel.json` and `vite.config.ts` exist in the project root and are committed.
- In Vercel → Project → **Settings → General**, ensure Framework Preset is **Other**, and Build/Output/Install Command fields are **all empty** (so `vercel.json` wins).
- Trigger a fresh deploy: **Deployments → ⋯ → Redeploy** (uncheck "Use existing build cache").
- Check the Build Logs for generated `.vercel/output` files. If missing, the Vercel Nitro preset did not run — verify your GitHub repo contains the updated `vite.config.ts` and `vercel.json` at the root, not inside a subfolder.

#### Method B — Deploy via Vercel CLI

```bash
# Install Vercel CLI globally
npm i -g vercel

# Login (opens browser)
vercel login

# Deploy from project root
vercel --prod
```

Follow the prompts. Vercel auto-detects Vite. Your site will be live in under a minute.

---

### Option 2: Netlify

#### Method A — Drag & Drop (Static Only)

1. Build the project locally:
   ```bash
   bun run build
   ```

2. Go to [netlify.com](https://netlify.com) → Log in → **Sites**

3. Drag the `dist/` folder into the Netlify dashboard drop zone.

4. Your site is live instantly with a `.netlify.app` URL.

#### Method B — GitHub Continuous Deployment

1. Push code to GitHub (same steps as Vercel Method A).

2. Go to [netlify.com](https://netlify.com) → **Add New Site → Import from Git**

3. Select your GitHub repo.

4. **Build settings:**
   - Build command: `bun run build`
   - Publish directory: `dist`
   - Click **Deploy Site**

5. Every future `git push` auto-triggers a new deploy.

---

### Option 3: Cloudflare Pages

Great for edge performance and CDN.

1. Push code to GitHub.

2. Go to [dash.cloudflare.com](https://dash.cloudflare.com) → **Pages → Create a Project**

3. **Connect to Git** → Select your GitHub repo.

4. **Configure build:**
   - Build command: `bun run build`
   - Build output directory: `dist`
   - Click **Save and Deploy**

5. Cloudflare builds and deploys globally. You get a `.pages.dev` URL.

---

### Option 4: Render (Static Site)

1. Push code to GitHub.

2. Go to [render.com](https://render.com) → **New → Static Site**

3. Connect your GitHub repo.

4. **Settings:**
   - Branch: `main`
   - Build Command: `bun run build`
   - Publish Directory: `dist`
   - Click **Create Static Site**

5. Render builds and deploys. You get an `onrender.com` URL.

---

### Option 5: GitHub Pages (Static Only)

> ⚠️ GitHub Pages serves only static files. You must configure the project to output a static build.

1. **Update `vite.config.ts`** to enable static output:
   ```ts
   export default defineConfig({
     tanstackStart: {
       server: { entry: "server" },
     },
     // Add this for static export:
     build: {
       outDir: "dist",
     },
   });
   ```

2. **Build locally:**
   ```bash
   bun run build
   ```

3. **Enable GitHub Pages:**
   - Go to your repo on GitHub → **Settings → Pages**
   - Source: **Deploy from a branch**
   - Branch: Select `main` → `/ (root)` or `/docs`
   - Alternatively, use **GitHub Actions** for automated builds

4. **Or use the `gh-pages` npm package:**
   ```bash
   bun add -d gh-pages
   ```
   Add to `package.json`:
   ```json
   "scripts": {
     "deploy": "bun run build && gh-pages -d dist"
   }
   ```
   Then run:
   ```bash
   bun run deploy
   ```

---

## Troubleshooting Deployment Issues

| Issue | Fix |
|-------|-----|
| Build fails with "bun not found" | Use `npm run build` instead, or set the build command to `npm install && npm run build` |
| Blank page after deploy | Check that `dist/` contains `index.html`. Ensure the framework preset is set to **Vite**. |
| 404 on refresh / direct links | Add a `_redirects` file in `public/` with: `/* /index.html 200` |
| Assets not loading | Verify the `base` path in `vite.config.ts` matches your deployment URL. |
| SSR errors on static host | Static hosts (GitHub Pages) don't support SSR. Use Vercel/Netlify/Render for full SSR support. |

---

## Custom Domain Setup

All platforms above support free custom domains:

1. Buy a domain (Namecheap, GoDaddy, Cloudflare Registrar, etc.)
2. In your hosting platform, go to **Settings → Domains**
3. Add your domain and follow the DNS instructions
4. Add the CNAME / A records provided by the platform to your DNS registrar
5. Wait 5–30 minutes for DNS propagation

---

## Pre-Deploy Checklist

Before deploying, run through this list:

- [ ] All project links (GitHub, live demos) are correct in `Projects.tsx`
- [ ] Email and social links are correct in `Contact.tsx` and `Hero.tsx`
- [ ] Your resume file is in `public/` and the download link works
- [ ] Profile image is in `src/assets/` and displays correctly
- [ ] `bun run build` completes without errors locally
- [ ] `bun run preview` shows the site correctly at `http://localhost:4173`
- [ ] All animations and hover effects work as expected
- [ ] Site is responsive on mobile (test with browser DevTools)
- [ ] SEO meta tags in `src/routes/index.tsx` are personalized
- [ ] Favicon and title are updated in `src/routes/__root.tsx`

---

## License

MIT — feel free to use this portfolio as a template for your own.

---

## Credits

- Built with [TanStack Start](https://tanstack.com/start)
- UI components from [shadcn/ui](https://ui.shadcn.com)
- Icons by [Lucide](https://lucide.dev)
- Fonts by [Geist](https://vercel.com/font)

---

<p align="center">
  <strong>Preethi R</strong> — Full-Stack & AI Engineer<br/>
  <a href="https://github.com/PreethiRagu">GitHub</a> · 
  <a href="https://www.linkedin.com/in/preethi-raghu-76a330364">LinkedIn</a> · 
  <a href="mailto:preethiraghu1806@gmail.com">Email</a>
</p>
