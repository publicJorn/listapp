import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'ListApp',
  description: 'When you truly love lists!',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
