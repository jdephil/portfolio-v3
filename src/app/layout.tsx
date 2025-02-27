import type { Metadata } from "next"
import { Chakra_Petch } from "next/font/google"
import "./globals.css"

const chakraPetch = Chakra_Petch({
  weight: "400",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "Jennifer De Phillips",
  description: "Portfolio website for Jennifer De Phillips",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${chakraPetch.className} antialiased `}>
        {children}
      </body>
    </html>
  )
}
