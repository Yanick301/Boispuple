import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next'
import '../globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import AuthProvider from '@/components/AuthProvider'
import Toaster from '@/components/Toaster'
import { locales } from '@/i18n'

export const metadata: Metadata = {
  title: 'Дрова Премиум - Качественные дрова для отопления',
  description: 'Премиальные дрова для отопления, пеллеты, печи и камины. Доставка по всей России. Качество гарантировано.',
  keywords: 'дрова, дрова для отопления, пеллеты, печи, камины, топливо',
}

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params
}: {
  children: React.ReactNode
  params: Promise<{ locale: string }>
}) {
  let locale: string
  let messages
  
  try {
    const resolvedParams = await params
    locale = resolvedParams.locale
    
    // Ensure that the incoming `locale` is valid
    if (!locales.includes(locale as any)) {
      notFound();
    }

    // Providing all messages to the client
    messages = await getMessages({ locale });
  } catch (error) {
    console.error('Error in LocaleLayout:', error)
    // Fallback to default locale
    locale = 'ru'
    messages = await getMessages({ locale: 'ru' });
  }

  return (
    <html lang={locale}>
      <body>
        <NextIntlClientProvider messages={messages}>
          <AuthProvider>
            <Header />
            <main className="min-h-screen">
              {children}
            </main>
            <Footer />
            <Toaster />
          </AuthProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
