import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import WhatsAppButton from "@/components/whatsapp-button";
import { ThemeProvider } from "@/components/providers/theme-provider";
import "@/lib/fontawesome";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Mindful Wema Solutions | Professional Counselling Services",
    template: "%s | Mindful Wema Solutions",
  },
  description:
    "Your partner in navigating life's challenges. Professional counselling services for teens, youths, couples, and families in Nairobi, Kenya.",
  keywords: [
    "counselling",
    "therapy",
    "mental health",
    "Nairobi",
    "Kenya",
    "marriage therapy",
    "child counselling",
    "family therapy",
    "corporate training",
  ],
  openGraph: {
    type: "website",
    locale: "en_KE",
    url: "https://mindfulwema.com",
    siteName: "Mindful Wema Solutions",
    title: "Mindful Wema Solutions | Professional Counselling Services",
    description:
      "Your partner in navigating life's challenges. Professional counselling services for teens, youths, couples, and families.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${poppins.variable}`} suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var theme = localStorage.getItem('theme');
                  if (theme === 'dark' || (!theme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                    document.documentElement.classList.add('dark');
                  }
                } catch(e) {}
              })();
            `,
          }}
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
      </head>
      <body className="antialiased bg-white dark:bg-surface-950 text-gray-900 dark:text-gray-100 transition-colors duration-300">
        <ThemeProvider>
          <Navbar />
          <main className="min-h-screen">{children}</main>
          <Footer />
          <WhatsAppButton />
        </ThemeProvider>
      </body>
    </html>
  );
}
