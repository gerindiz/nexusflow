import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'NexusFlow',
  description: 'AI-Powered Workflow Automation',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body style={{margin:0, padding:0, fontFamily:'sans-serif'}}>
        {children}
      </body>
    </html>
  )
}