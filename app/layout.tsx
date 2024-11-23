import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Header } from "@/components/header"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "lovehe.art - Connect Money with Heart",
  description: "A new way to move money globally with stablecoins",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="h-full">
      <body className={`${inter.className} bg-black text-white flex flex-col min-h-full`}>
        <Header />
        <main className="flex-grow relative pt-16 sm:pt-20">
          {children}
        </main>
      </body>
    </html>
  )
}

