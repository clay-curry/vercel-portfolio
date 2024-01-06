import type { Metadata } from 'next'
import { Roboto } from 'next/font/google'
import './globals.css'

const roboto = Roboto({ weight: "100", subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Clayton Curry',
  description: 'Portfolio of research, projects, and facts about Clayton Curry',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`absolute top-0 bottom-0 left-0 right-0 ${roboto.className}`}>{children}</body>
    </html>
  )
}