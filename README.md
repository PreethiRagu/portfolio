# Preethi R — Developer Portfolio

A premium, futuristic developer portfolio built with **React 19**, **TanStack Start**, **Tailwind CSS v4**, and **Framer Motion**. Designed with a black-and-white luxury aesthetic, glassmorphism effects, and cinematic animations to impress recruiters and showcase production-grade full-stack & AI projects.


## Live Site

**[https://preethiraghu.lovable.app](https://preethiraghu.vercel.app)**

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
