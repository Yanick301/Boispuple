'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X, ShoppingCart, User, Phone, Search, Heart, LogOut } from 'lucide-react'
import { useAuth } from './AuthProvider'
import { useCartStore } from '@/lib/store/cartStore'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false)
  const { user, signOut } = useAuth()
  const cartCount = useCartStore((state) => state.getItemCount())

  const menuItems = [
    { name: 'Главная', href: '/' },
    { name: 'О нас', href: '/about' },
    { name: 'Продукция', href: '/products' },
    { name: 'FAQ', href: '/faq' },
    { name: 'Контакты', href: '/contact' },
  ]

  const categories = [
    { name: 'Дрова для отопления', href: '/products/firewood' },
    { name: 'Пеллеты и гранулы', href: '/products/pellets' },
    { name: 'Печи и камины', href: '/products/stoves' },
    { name: 'Котлы', href: '/products/boilers' },
    { name: 'Аксессуары', href: '/products/accessories' },
  ]

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      {/* Top Bar */}
      <div className="bg-wood-900 text-white py-2">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center text-sm">
            <div className="flex items-center gap-4">
              <a href="tel:+79991234567" className="flex items-center gap-2 hover:text-fire-400 transition">
                <Phone size={16} />
                <span>+7 (999) 123-45-67</span>
              </a>
              <span className="hidden md:inline">Доставка 24/7</span>
            </div>
            <div className="flex items-center gap-4">
              {user ? (
                <Link href="/profile" className="flex items-center gap-2 hover:text-fire-400 transition">
                  <User size={16} />
                  <span>Мой профиль</span>
                </Link>
              ) : (
                <Link href="/login" className="flex items-center gap-2 hover:text-fire-400 transition">
                  <User size={16} />
                  <span>Войти / Регистрация</span>
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <div className="bg-fire-600 text-white p-3 rounded-lg">
              <span className="text-2xl font-bold">ДП</span>
            </div>
            <div>
              <h1 className="text-2xl font-serif font-bold text-wood-900">ДРОВА ПРЕМИУМ</h1>
              <p className="text-xs text-wood-600">Качество и надежность</p>
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
          <div className="flex items-center gap-4">
            <button className="p-2 hover:bg-wood-100 rounded-lg transition">
              <Search size={24} className="text-wood-700" />
            </button>
            <Link
              href="/favorites"
              className="relative p-2 hover:bg-wood-100 rounded-lg transition"
            >
              <Heart size={24} className="text-wood-700" />
            </Link>
            <Link
              href="/cart"
              className="relative p-2 hover:bg-wood-100 rounded-lg transition"
            >
              <ShoppingCart size={24} className="text-wood-700" />
              {cartCount > 0 && (
                <span className="absolute top-0 right-0 bg-fire-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold">
                  {cartCount}
                </span>
              )}
            </Link>
            {user && (
              <div className="relative">
                <button
                  onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
                  className="p-2 hover:bg-wood-100 rounded-lg transition"
                >
                  <div className="w-8 h-8 bg-gradient-to-br from-fire-500 to-fire-700 rounded-full flex items-center justify-center text-white font-bold">
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
                      Мой профиль
                    </Link>
                    <Link
                      href="/profile/orders"
                      className="block px-4 py-3 hover:bg-wood-50 transition text-wood-700"
                      onClick={() => setIsUserMenuOpen(false)}
                    >
                      Мои заказы
                    </Link>
                    <button
                      onClick={async () => {
                        await signOut()
                        setIsUserMenuOpen(false)
                      }}
                      className="w-full text-left px-4 py-3 hover:bg-wood-50 transition text-wood-700 flex items-center gap-2"
                    >
                      <LogOut size={16} />
                      Выйти
                    </button>
                  </div>
                )}
              </div>
            )}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 hover:bg-wood-100 rounded-lg transition"
            >
              {isMenuOpen ? (
                <X size={24} className="text-wood-700" />
              ) : (
                <Menu size={24} className="text-wood-700" />
              )}
            </button>
          </div>
        </div>

        {/* Categories Bar */}
        <div className="hidden md:flex items-center gap-6 mt-4 pb-2 border-b border-wood-200">
          {categories.map((category) => (
            <Link
              key={category.name}
              href={category.href}
              className="text-sm text-wood-600 hover:text-fire-600 transition-colors"
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
              <p className="text-sm font-semibold text-wood-900 mb-2">Категории:</p>
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

