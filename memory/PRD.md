# PRD — Chandresh Patidar Portfolio

## Original Problem Statement
> Build a landing page: Build a portfolio website by referring to the CV i've attached for the Software engineer. Make it look good and catchy. User should feel like he is wishing to move through the page and see everything. Make sure to have smooth transitions and animations with creative look and feel.

## Subject
Single-page portfolio for **Chandresh Patidar** — Senior Frontend Engineer (5+ yrs).
CV source: `/app/frontend/public/chandresh-patidar-cv.pdf`.

## Architecture
- **Frontend**: React 19, Tailwind, Framer Motion, Lenis smooth scroll, react-fast-marquee, @phosphor-icons/react, Sonner (toasts).
- **Backend**: FastAPI + Motor + MongoDB. Routes prefixed `/api`.
- **Design language**: Dark Brutalist Tech (Acid yellow `#E5FE40` on Obsidian `#050505`), Chivo / JetBrains Mono / IBM Plex Sans, sharp 0-radius edges, exposed grids, terminal/log-styled work history, kinetic marquee, custom mix-blend-difference cursor, magnetic buttons, scroll-driven reveals.

## User Personas
1. **Hiring managers / Recruiters** — scan quickly, want stack + experience + CV.
2. **Engineering peers** — assess craft via projects, code quality cues, animations.
3. **Potential collaborators / clients** — contact via form / email.

## Core Requirements (static)
- Hero with name, role, tagline, scroll prompt, CV download CTA, parallax background.
- About + Stats + Profile card with all contact info.
- Skills (categorized + kinetic marquee).
- Experience timeline as terminal log (Mercanis → Dechea → Appnosys).
- Featured projects bento grid (Mercanis, Dechea, Cult.fit) with hover color reveal.
- Education + Certifications + Awards.
- Contact form persisted to MongoDB + social links.
- Footer.

## Implemented (Dec 2025)
- ✅ All 7 sections + responsive navbar + footer.
- ✅ Lenis smooth scrolling, custom cursor, magnetic CTAs.
- ✅ Scroll-driven reveals on every section.
- ✅ Contact form POST `/api/contact` saving to Mongo; GET `/api/contact` to list.
- ✅ CV downloadable from `/chandresh-patidar-cv.pdf`.
- ✅ Sonner toasts.
- ✅ data-testid coverage on all interactive + key informational elements.
- ✅ Testing agent (iteration 1): 100% backend (9/9) + 100% frontend.

## Backlog (next phases)
**P1**
- Per-project case study modal/route with screenshots + outcomes/metrics.
- Loading sequence (split-flap or counter intro) before hero reveals.
- View counter / GitHub stats (live API).
- Light theme toggle.

**P2**
- Blog/notes section (MDX or external link).
- Spam protection on contact form (honeypot or hCaptcha).
- Email forwarding (Resend) when a new message arrives.
- SEO meta + OG image; sitemap.
- i18n (English / Hindi).

## Next Tasks
- Decide on case-study deep dives (need richer project data + visuals).
- Wire Resend if real-time email notifications desired.
- Optional: GitHub auto-pull of pinned repos to populate a "Lab" section.
