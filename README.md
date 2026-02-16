# Mindful Wema Solutions

Professional counselling and mental health services website for **Mindful Wema Solutions**, based at Amani Counselling Centre and Training Institute, Raila Odinga Way, Nairobi, Kenya.

## About

Mindful Wema Solutions provides accessible, professional counselling services for teens, youths, couples, and families. This website serves as the organisation's digital presence — showcasing services, sharing testimonials, and enabling prospective clients to book appointments and get in touch.

## Services Offered

- Mentorship Programme
- Child Counselling
- Marriage & Family Therapy
- Pre-Marital Counselling
- Corporate Training
- Clinical Counselling
- Mediation
- Clinical Assessment
- Parental Coaching
- Addiction Counselling
- Psychological First Aid (PFA)
- Trauma Counselling
- Life Skills Training

## Tech Stack

| Category   | Technology                                       |
| ---------- | ------------------------------------------------ |
| Framework  | [Next.js](https://nextjs.org) 16 (App Router)    |
| Language   | TypeScript                                       |
| Styling    | [Tailwind CSS](https://tailwindcss.com) v4       |
| Animations | [Framer Motion](https://www.framer.com/motion/)  |
| Icons      | [Font Awesome](https://fontawesome.com) (React)  |
| Email      | [Resend](https://resend.com) (Server Actions)    |
| Booking    | [Calendly](https://calendly.com) (External link) |
| Deployment | [Vercel](https://vercel.com)                     |

## Project Structure

```
src/
├── app/
│   ├── about/          # About page with Meet the Team
│   ├── blog/           # Blog listing & individual post pages
│   ├── contact/        # Contact page with form & Google Map
│   ├── services/       # Services listing page
│   ├── actions.ts      # Server Actions (Resend email integration)
│   ├── globals.css     # Global styles & Tailwind config
│   ├── layout.tsx      # Root layout with Poppins font
│   └── page.tsx        # Homepage
├── components/
│   ├── sections/       # Hero, Services Preview, How It Works, Testimonials,
│   │                   # FAQ Accordion, CTA, Meet the Team, Marquee Banner
│   ├── ui/             # Reusable UI (Button, AnimatedCard, TiltCard,
│   │                   # SkeletonImage, FloatingParticles, SectionHeader)
│   ├── providers/      # Theme provider
│   ├── navbar.tsx      # Navigation with animated active link underline
│   ├── footer.tsx      # Site footer
│   ├── cursor-follower.tsx  # Cursor dot + ring (desktop) & tap ripple (mobile)
│   ├── scroll-to-top.tsx    # Back-to-top button with scroll progress ring
│   ├── theme-toggle.tsx     # Dark/Light mode toggle
│   └── whatsapp-button.tsx  # Floating WhatsApp button
├── data/               # Static data (services, contacts, testimonials,
│                       # team, FAQs, blog posts)
├── hooks/              # Custom React hooks
└── lib/                # Utilities & Font Awesome config
```

## Features

- **Responsive Design** — Mobile-first layout with a left-sliding mobile navigation menu
- **Dark Mode** — Theme toggle with system preference detection (defaults to light)
- **Scroll Animations** — Fade-in effects powered by Intersection Observer & Framer Motion
- **Typewriter Hero Headline** — Rotating animated phrases in the hero section
- **Floating Particles** — Canvas-based animated particles with connecting lines in the hero background
- **Cursor Follower** — Pink dot + trailing ring on desktop, tap ripple on mobile/tablet
- **3D Tilt Cards** — Team cards tilt toward the cursor with spring physics and a light glare
- **Marquee Banner** — Infinite-scrolling brand values strip between hero and services
- **Animated Nav Underline** — Smooth sliding underline on active navigation links
- **FAQ Accordion** — Expandable FAQs with staggered reveal animations
- **How It Works** — Step-by-step process with animated progress lines
- **Meet the Team** — Team member cards with hover specialty overlays
- **Blog / Resources** — Article listing and individual post pages
- **Skeleton Image Loading** — Shimmer placeholders while images load
- **Back-to-Top Button** — Circular scroll progress ring with smooth scroll
- **Flip Service Cards** — Service cards that flip on hover/tap to reveal details
- **Contact Form** — Server-side email delivery via Resend
- **Embedded Google Map** — Pinpointing Amani Counselling Centre on Raila Odinga Way
- **Calendly Integration** — Direct appointment booking via external link
- **WhatsApp Button** — Floating chat button with pre-populated message
- **SEO Optimised** — Proper meta tags, semantic HTML, and structured headings

## Getting Started

### Prerequisites

- Node.js 18+
- npm, yarn, pnpm, or bun

### Installation

```bash
# Clone the repository
git clone https://github.com/your-username/wema.git
cd wema

# Install dependencies
npm install
```

### Environment Variables

Create a `.env.local` file in the root directory:

```env
RESEND_API_KEY=your_resend_api_key
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build

```bash
npm run build
npm start
```

## Deployment

This project is optimised for deployment on [Vercel](https://vercel.com). Push to your Git repository and connect it to Vercel for automatic deployments.

## License

All rights reserved © Mindful Wema Solutions.
