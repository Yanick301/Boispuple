'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import { useLocale, useTranslations } from 'next-intl'
import { Menu, X, ShoppingCart, User, Phone, Search, Heart, LogOut, Globe } from 'lucide-react'
import { useAuth } from './AuthProvider'
import { useCartStore } from '@/lib/store/cartStore'
import { locales } from '@/i18n'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false)
  const [isLangMenuOpen, setIsLangMenuOpen] = useState(false)
  const { user, signOut } = useAuth()
  const cartCount = useCartStore((state) => state.getItemCount())
  const t = useTranslations()
  const locale = useLocale()
  const router = useRouter()
  const pathname = usePathname()

  const switchLocale = (newLocale: string) => {
    try {
      // Remove current locale from pathname
      const currentPath = pathname || '/'
      const pathWithoutLocale = currentPath.replace(`/${locale}`, '') || '/'
      // Navigate to new locale
      router.push(`/${newLocale}${pathWithoutLocale}`)
      setIsLangMenuOpen(false)
    } catch (error) {
      console.error('Error switching locale:', error)
      // Fallback to root with new locale
      router.push(`/${newLocale}`)
      setIsLangMenuOpen(false)
    }
  }

  const menuItems = [
    { name: t('header.home'), href: '/' },
    { name: t('header.about'), href: '/about' },
    { name: t('header.products'), href: '/products' },
    { name: t('header.faq'), href: '/faq' },
    { name: t('header.contact'), href: '/contact' },
  ]

  const categories = [
    { name: t('categories.firewood'), href: '/products/firewood' },
    { name: t('categories.pellets'), href: '/products/pellets' },
    { name: t('categories.stoves'), href: '/products/stoves' },
    { name: t('categories.boilers'), href: '/products/boilers' },
    { name: t('categories.accessories'), href: '/products/accessories' },
  ]

  const localeNames: Record<string, string> = {
    ru: 'Русский',
    fr: 'Français',
  }

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      {/* Top Bar */}
      <div className="bg-wood-900 text-white py-2">
        <div className="container mx-auto px-4">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-2 sm:gap-0 text-xs sm:text-sm">
            <div className="flex items-center gap-3 sm:gap-4">
              <a href="tel:+79991234567" className="flex items-center gap-1.5 sm:gap-2 hover:text-fire-400 transition whitespace-nowrap">
                <Phone size={14} className="sm:w-4 sm:h-4" />
                <span className="text-xs sm:text-sm">+7 (999) 123-45-67</span>
              </a>
              <span className="hidden sm:inline">{t('header.delivery')}</span>
            </div>
            <div className="flex items-center gap-3 sm:gap-4">
              {/* Language Selector */}
              <div className="relative">
                <button
                  onClick={() => setIsLangMenuOpen(!isLangMenuOpen)}
                  className="flex items-center gap-1.5 sm:gap-2 hover:text-fire-400 transition whitespace-nowrap"
                >
                  <Globe size={14} className="sm:w-4 sm:h-4" />
                  <span className="text-xs sm:text-sm">{localeNames[locale] || locale.toUpperCase()}</span>
                </button>
                {isLangMenuOpen && (
                  <div className="absolute right-0 mt-2 bg-white rounded-lg shadow-xl border border-wood-100 overflow-hidden z-50 min-w-[120px]">
                    {locales.map((loc) => (
                      <button
                        key={loc}
                        onClick={() => switchLocale(loc)}
                        className={`w-full text-left px-4 py-2 text-sm hover:bg-wood-50 transition ${
                          locale === loc ? 'bg-wood-100 font-semibold text-fire-600' : 'text-wood-700'
                        }`}
                      >
                        {localeNames[loc]}
                      </button>
                    ))}
                  </div>
                )}
              </div>
              {user ? (
                <Link href="/profile" className="flex items-center gap-1.5 sm:gap-2 hover:text-fire-400 transition whitespace-nowrap">
                  <User size={14} className="sm:w-4 sm:h-4" />
                  <span className="hidden xs:inline text-xs sm:text-sm">{t('header.myProfile')}</span>
                </Link>
              ) : (
                <Link href="/login" className="flex items-center gap-1.5 sm:gap-2 hover:text-fire-400 transition whitespace-nowrap">
                  <User size={14} className="sm:w-4 sm:h-4" />
                  <span className="text-xs sm:text-sm">{t('header.loginRegister')}</span>
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="container mx-auto px-3 sm:px-4 py-3 sm:py-4">
        <div className="flex items-center justify-between gap-2 sm:gap-4">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 sm:gap-3 min-w-0 flex-shrink-0">
            <div className="bg-fire-600 text-white p-2 sm:p-3 rounded-lg flex-shrink-0">
              <span className="text-xl sm:text-2xl font-bold">ДП</span>
            </div>
            <div className="min-w-0 hidden xs:block">
              <h1 className="text-lg sm:text-xl md:text-2xl font-serif font-bold text-wood-900 truncate">ДРОВА ПРЕМИУМ</h1>
              <p className="text-xs text-wood-600 hidden sm:block">Качество и надежность</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {menuItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-wood-700 hover:text-fire-600 font-medium transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-2 sm:gap-3 lg:gap-4 flex-shrink-0">
            <button className="p-1.5 sm:p-2 hover:bg-wood-100 rounded-lg transition" aria-label={t('common.search')}>
              <Search size={18} className="sm:w-6 sm:h-6 text-wood-700" />
            </button>
            <Link
              href="/favorites"
              className="relative p-1.5 sm:p-2 hover:bg-wood-100 rounded-lg transition"
              aria-label={t('common.favorites')}
            >
              <Heart size={18} className="sm:w-6 sm:h-6 text-wood-700" />
            </Link>
            <Link
              href="/cart"
              className="relative p-1.5 sm:p-2 hover:bg-wood-100 rounded-lg transition"
              aria-label={t('common.cart')}
            >
              <ShoppingCart size={18} className="sm:w-6 sm:h-6 text-wood-700" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-fire-600 text-white text-[10px] sm:text-xs rounded-full w-4 h-4 sm:w-5 sm:h-5 flex items-center justify-center font-bold">
                  {cartCount > 9 ? '9+' : cartCount}
                </span>
              )}
            </Link>
            {user && (
              <div className="relative hidden sm:block">
                <button
                  onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
                  className="p-1.5 sm:p-2 hover:bg-wood-100 rounded-lg transition"
                  aria-label={t('header.myProfile')}
                >
                  <div className="w-7 h-7 sm:w-8 sm:h-8 bg-gradient-to-br from-fire-500 to-fire-700 rounded-full flex items-center justify-center text-white text-xs sm:text-sm font-bold">
                    {user.email?.[0]?.toUpperCase() || 'U'}
                  </div>
                </button>
                {isUserMenuOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-white rounded-xl shadow-2xl border border-wood-100 overflow-hidden z-50">
                    <Link
                      href="/profile"
                      className="block px-4 py-3 hover:bg-wood-50 transition text-wood-700"
                      onClick={() => setIsUserMenuOpen(false)}
                    >
                      {t('header.myProfile')}
                    </Link>
                    <Link
                      href="/profile/orders"
                      className="block px-4 py-3 hover:bg-wood-50 transition text-wood-700"
                      onClick={() => setIsUserMenuOpen(false)}
                    >
                      {t('common.orders')}
                    </Link>
                    <button
                      onClick={async () => {
                        await signOut()
                        setIsUserMenuOpen(false)
                      }}
                      className="w-full text-left px-4 py-3 hover:bg-wood-50 transition text-wood-700 flex items-center gap-2"
                    >
                      <LogOut size={16} />
                      {t('common.logout')}
                    </button>
                  </div>
                )}
              </div>
            )}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-1.5 sm:p-2 hover:bg-wood-100 rounded-lg transition"
              aria-label="Меню"
            >
              {isMenuOpen ? (
                <X size={20} className="sm:w-6 sm:h-6 text-wood-700" />
              ) : (
                <Menu size={20} className="sm:w-6 sm:h-6 text-wood-700" />
              )}
            </button>
          </div>
        </div>

        {/* Categories Bar */}
        <div className="hidden md:flex items-center gap-4 lg:gap-6 mt-3 sm:mt-4 pb-2 border-b border-wood-200 overflow-x-auto">
          {categories.map((category) => (
            <Link
              key={category.name}
              href={category.href}
              className="text-xs md:text-sm text-wood-600 hover:text-fire-600 transition-colors whitespace-nowrap"
            >
              {category.name}
            </Link>
          ))}
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-white border-t border-wood-200">
          <nav className="container mx-auto px-4 py-4 space-y-2">
            {menuItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block py-2 text-wood-700 hover:text-fire-600 font-medium transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <div className="pt-4 border-t border-wood-200 mt-2">
              <p className="text-sm font-semibold text-wood-900 mb-2">{t('header.categories')}:</p>
              {categories.map((category) => (
                <Link
                  key={category.name}
                  href={category.href}
                  className="block py-2 text-sm text-wood-600 hover:text-fire-600 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {category.name}
                </Link>
              ))}
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
