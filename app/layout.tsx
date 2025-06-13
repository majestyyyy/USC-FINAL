import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import Chatbot from "@/components/Chatbot"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "UE USC",
  description:
    "Official website of the University of the East Manila University Student Council - serving students with excellence and dedication.",
  keywords: "UE Manila, University Student Council, USC, University of the East",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/png" href="/images/usc.png" sizes="256x256 128x128 64x64 32x32 16x16" />
      </head>
      <body className={inter.className}>
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <Chatbot />
      </body>
    </html>
  )
}
