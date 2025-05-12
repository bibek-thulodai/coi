import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"], display: "swap" })

export const metadata: Metadata = {
  title: "Creating Opportunities International",
  description:
    "Nepal's foremost opportunity provider platform connecting talented individuals with educational and professional opportunities worldwide.",
  keywords: "opportunities, Nepal, education, scholarships, jobs, internships, fellowships, career development",
  viewport: "width=device-width, initial-scale=1",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://creatingoppo.com",
    title: "Creating Opportunities International",
    description: "Nepal's foremost opportunity provider platform",
    siteName: "Creating Opportunities International",
  },
  twitter: {
    card: "summary_large_image",
    title: "Creating Opportunities International",
    description: "Nepal's foremost opportunity provider platform",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
          <Header />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
