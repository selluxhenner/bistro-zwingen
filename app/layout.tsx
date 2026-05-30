import type React from "react"
import type { Metadata } from "next"
import { Geist, Cormorant } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _cormorant = Cormorant({
  subsets: ["latin"],
  weight: ["300", "400", "600", "700"],
  variable: "--font-serif",
})

export const metadata: Metadata = {
  title: "Terrassen Bistro - Modernes Outdoor-Dining-Erlebnis",
  description:
    "Erleben Sie außergewöhnliche Kulinarik in einzigartiger Atmosphäre. Dieses moderne Bistro bietet frische Küche auf einer sonnigen Holzterrasse.",
  generator: "v0.app",
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="de">
      <body className={`font-sans antialiased ${_cormorant.variable}`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
