import createMiddleware from 'next-intl/middleware';
import { type NextRequest, NextResponse } from 'next/server'
import { updateSession } from '@/lib/supabase/middleware'
import { locales, defaultLocale } from './i18n'

const intlMiddleware = createMiddleware({
  locales,
  defaultLocale,
  localePrefix: 'as-needed'
});

export async function middleware(request: NextRequest) {
  // First handle internationalization
  const intlResponse = intlMiddleware(request);
  
  // Then handle Supabase session - but only if intl didn't redirect
  if (intlResponse.status === 200 || intlResponse.status === 307 || intlResponse.status === 308) {
    const supabaseResponse = await updateSession(request);
    
    // Merge headers from Supabase into intl response
    supabaseResponse.headers.forEach((value, key) => {
      intlResponse.headers.set(key, value);
    });
    
    // Merge cookies
    supabaseResponse.cookies.getAll().forEach((cookie) => {
      intlResponse.cookies.set(cookie.name, cookie.value, cookie);
    });
  }
  
  return intlResponse;
}

export const config = {
  matcher: [
    '/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)',
  ],
}


