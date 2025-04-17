import type React from "react"
import type { Metadata, Viewport } from "next"
import { Inter } from "next/font/google"
import Link from "next/link"
import { Frame } from "lucide-react"
import Script from "next/script"

import { ThemeProvider } from "@/components/theme-provider"
import { ThemeToggle } from "@/components/theme-toggle"
import { Button } from "@/components/ui/button"
import { SocialLinks } from "@/components/social-links"

import "./globals.css"

// Load Inter font
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
})

export const metadata: Metadata = {
  metadataBase: new URL("https://misclassify.dev"),
  title: {
    default: "Misclassify - Minecraft & Discord Developer",
    template: "%s | Misclassify",
  },
  description: "Portfolio showcasing Minecraft mods, Discord bots, and community management expertise by Misclassify",
  keywords: [
    "Minecraft Developer",
    "Discord Bot Developer",
    "Minecraft Mods",
    "Discord Bots",
    "Gaming Community",
    "Minecraft SMP",
  ],
  authors: [{ name: "Misclassify" }],
  creator: "Misclassify",
  publisher: "Misclassify",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://misclassify.dev",
    title: "Misclassify - Minecraft & Discord Developer",
    description: "Minecraft mods and Discord bots that enhance gameplay and unite communities",
    siteName: "Misclassify",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Misclassify - Minecraft & Discord Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Misclassify - Minecraft & Discord Developer",
    description: "Minecraft mods and Discord bots that enhance gameplay and unite communities",
    images: ["/og-image.png"],
    creator: "@misclassify",
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: { url: "/apple-touch-icon.png", sizes: "180x180" },
    other: [
      {
        rel: "mask-icon",
        url: "/safari-pinned-tab.svg",
        color: "#5865F2",
      },
    ],
  },
  manifest: "/manifest.json",
  alternates: {
    canonical: "/",
  },
}

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#09090b" },
  ],
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Projects", path: "/projects" },
    { name: "Experience", path: "/experience" },
    { name: "Community", path: "/client-reviews" },
    { name: "Contact", path: "/contact" },
  ]

  return (
    <html lang="en" suppressHydrationWarning className={inter.variable}>
      <head>
        {/* Preload fonts */}
        <link rel="preload" href={inter.style.src} as="font" type="font/woff2" crossOrigin="anonymous" />
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="Misclassify | Minecraft Modding & Discord Development Portfolio" />
        <meta name="author" content="Misclassify" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Misclassify Portfolio" />
        <meta
          property="og:description"
          content="Showcasing Minecraft modding, Discord bots, and community-building projects."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://v0-portfolio-website-design-flax-five.vercel.app" />
        <meta property="og:image" content="https://v0-portfolio-website-design-flax-five.vercel.app/og-image.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Misclassify Portfolio" />
        <meta name="twitter:description" content="Minecraft and Discord development showcase." />
        <meta name="twitter:image" content="https://v0-portfolio-website-design-flax-five.vercel.app/og-image.png" />
        <link rel="canonical" href="https://v0-portfolio-website-design-flax-five.vercel.app" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      document.documentElement.classList.add('dark');
    }
  `,
          }}
        />
      </head>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          <div className="flex min-h-screen flex-col">
            <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
              <div className="container flex h-16 items-center justify-between">
                <div className="flex items-center gap-2">
                  <Link href="/" className="flex items-center gap-2">
                    <Frame className="h-6 w-6" />
                    <span className="font-bold">Misclassify</span>
                  </Link>
                </div>
                <nav className="hidden md:flex items-center gap-6">
                  {navLinks.map((link) => (
                    <Link
                      key={link.path}
                      href={link.path}
                      className="text-sm font-medium transition-colors hover:text-primary"
                    >
                      {link.name}
                    </Link>
                  ))}
                </nav>
                <div className="flex items-center gap-2">
                  <ThemeToggle />
                  <Button asChild className="hidden md:flex">
                    <Link href="/contact">Contact Me</Link>
                  </Button>
                  <Button variant="outline" size="icon" className="md:hidden" aria-label="Toggle menu">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-5 w-5"
                      aria-hidden="true"
                    >
                      <line x1="4" x2="20" y1="12" y2="12" />
                      <line x1="4" x2="20" y1="6" y2="6" />
                      <line x1="4" x2="20" y1="18" y2="18" />
                    </svg>
                    <span className="sr-only">Toggle menu</span>
                  </Button>
                </div>
              </div>
            </header>
            <main className="flex-1">{children}</main>
            <footer className="border-t py-6 md:py-0">
              <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
                <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
                  © {new Date().getFullYear()} Misclassify. All rights reserved.
                </p>
                <SocialLinks />
              </div>
            </footer>
          </div>
        </ThemeProvider>

        {/* Vercel Analytics */}
        <Script src="/_vercel/insights/script.js" strategy="afterInteractive" />

        {/* EmailJS */}
        <Script
          src="https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js"
          strategy="beforeInteractive"
          onLoad={() => {
            console.log("EmailJS script loaded")
            if (window.emailjs) {
              window.emailjs
                .init("21yvczpienMFAKD5B")
                .then(() => console.log("EmailJS initialized successfully"))
                .catch((err) => console.error("EmailJS initialization error:", err))
            } else {
              console.error("EmailJS failed to load")
            }
          }}
        />
      </body>
    </html>
  )
}
