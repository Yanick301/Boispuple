import { redirect } from 'next/navigation';
import { locales, defaultLocale } from '@/i18n';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  // This will be handled by middleware, but keeping for safety
  return children;
}
