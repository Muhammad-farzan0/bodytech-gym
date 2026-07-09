# IronForge Gym — 3D Scroll Website

A fully immersive, scroll-driven gym website built with **Next.js 16**,
**TailwindCSS v3**, and **Framer Motion**. Six pages, animated 3D-style
gym equipment, tilt/flip cards, a scroll-loaded barbell progress bar, a
working dark/light toggle, and a pluggable contact form.

> Note on the BodyTech reference: this project takes structural/interaction
> inspiration (branch-style pricing, contact, testimonials) from
> bodytechpk.com, but does not reuse their copyrighted photos, logo, or
> business identity — the brand here is the placeholder "IronForge." Swap
> in your own real business name, address, phone numbers, and photography
> before shipping this to production.

## Pages

- **Home** — parallax 3D hero (barbell/dumbbell/treadmill), big stat
  callout, philosophy section, testimonials teaser, CTA.
- **About** — gym story, 3D tilt trainer cards (mouse-follow), scroll-lit
  milestone timeline.
- **Services** — 3D flip icon cards per facility, weekly class schedule.
- **Membership** — 3D pricing cards; the "Standard" plan pops forward.
- **Testimonials** — member reviews with star ratings, 3D tilt cards.
- **Contact** — validated form (React Hook Form + EmailJS), parallax map,
  social links, bonus interactive rest-timer widget.

## Getting Started

```bash
npm install
npm run dev
```

Visit `http://localhost:3000`.

```bash
npm run build
npm run start
```

## Dark / Light Mode

Implemented with `next-themes` + CSS custom properties (`src/app/globals.css`),
so both themes share the exact same component code — no duplicated
light/dark class branches, no flash-of-wrong-theme bugs. To change either
theme's palette, edit the `:root` (light) or `html.dark` (dark) variable
block in `globals.css`.

## Configuring the contact form (EmailJS)

The form works out of the box in a "demo" mode (it simulates a send). To
actually deliver emails:

1. Create a free account at [emailjs.com](https://www.emailjs.com/).
2. Create an Email Service and an Email Template (fields: `name`,
   `email`, `phone`, `goal`, `message`).
3. Open `src/components/ContactForm.tsx` and replace:

   ```ts
   const EMAILJS_SERVICE_ID = "YOUR_SERVICE_ID";
   const EMAILJS_TEMPLATE_ID = "YOUR_TEMPLATE_ID";
   const EMAILJS_PUBLIC_KEY = "YOUR_PUBLIC_KEY";
   ```

   with the values from your EmailJS dashboard.

## Theming

- Colors are CSS variables in `src/app/globals.css`, mapped into Tailwind
  via `tailwind.config.ts` — black/red/gray identity, red as the primary
  accent, in both light and dark variants.
- Fonts: `Unbounded` (display/headings) + `Plus Jakarta Sans` (body) +
  `JetBrains Mono` (numeric readouts) — all self-hosted via `@fontsource`,
  no external font CDN required.
- `AOS` powers fade/zoom reveals; `Framer Motion` powers true scroll-linked
  3D transforms (parallax hero, timeline, pricing cards, tilt cards,
  service flip cards, testimonial tilt cards).

## Tech Stack

Next.js 16 (App Router) · TailwindCSS v3 · Framer Motion · AOS ·
React Hook Form · @emailjs/browser · lucide-react · next-themes

## Notes

- The Google Maps embed on the Contact page needs internet access in the
  visitor's browser (standard `<iframe>`, no API key required).
- Replace the placeholder address, phone, email, and social links in
  `src/components/Footer.tsx` and `src/app/contact/page.tsx` with real
  gym details.
