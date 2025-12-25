import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Дрова Премиум',
  description: 'Премиальные дрова для отопления',
}

// Minimal root layout - the [locale] layout provides the actual HTML structure
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}

