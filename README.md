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
│   ├── about/          # About page
│   ├── contact/        # Contact page with form & Google Map
│   ├── services/       # Services listing page
│   ├── actions.ts      # Server Actions (Resend email integration)
│   ├── globals.css     # Global styles & Tailwind config
│   ├── layout.tsx      # Root layout with Poppins font
│   └── page.tsx        # Homepage
├── components/
│   ├── sections/       # Hero, Services Preview, Testimonials, CTA
│   ├── ui/             # Reusable UI components (Button, AnimatedCard, etc.)
│   ├── providers/      # Theme provider
│   ├── navbar.tsx      # Navigation bar
│   ├── footer.tsx      # Site footer
│   ├── theme-toggle.tsx # Dark/Light mode toggle
│   └── whatsapp-button.tsx # Floating WhatsApp button
├── data/               # Static data (services, contacts, testimonials)
├── hooks/              # Custom React hooks
└── lib/                # Utilities & Font Awesome config
```

## Features

- **Responsive Design** — Mobile-first layout with a left-sliding mobile navigation menu
- **Dark Mode** — Theme toggle with system preference detection
- **Scroll Animations** — Fade-in effects powered by Intersection Observer
- **Contact Form** — Server-side email delivery via Resend
- **Embedded Google Map** — Pinpointing Amani Counselling Centre on Raila Odinga Way
- **Calendly Integration** — Direct appointment booking via external link
- **WhatsApp Button** — Floating chat button for quick communication
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
