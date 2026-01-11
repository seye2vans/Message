import type React from "react"
import type { Metadata } from "next"
import { Playfair_Display, Lora } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const _playfair = Playfair_Display({ subsets: ["latin"] })
const _lora = Lora({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Happy Valentine's Day, Dara",
  description: "A beautiful Valentine's Day message with animated flowers",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
