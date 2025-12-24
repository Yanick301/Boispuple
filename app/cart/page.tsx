'use client'

import { useEffect, useCallback, useMemo } from 'react'
import { ShoppingCart, Trash2, Plus, Minus } from 'lucide-react'
import Link from 'next/link'
import { useCartStore } from '@/lib/store/cartStore'
import { useAuth } from '@/components/AuthProvider'
import { createClient } from '@/lib/supabase/client'
import toast from 'react-hot-toast'

export default function CartPage() {
  const cartItems = useCartStore((state) => state.items)
  const updateQuantity = useCartStore((state) => state.updateQuantity)
  const removeItem = useCartStore((state) => state.removeItem)
  const getTotal = useCartStore((state) => state.getTotal)
  const { user } = useAuth()
  const supabase = useMemo(() => createClient(), [])

  const syncCartWithSupabase = useCallback(async () => {
    if (!user?.id) return
    
    try {
      // Load cart from Supabase
      const { data, error } = await supabase
        .from('user_cart')
        .select('*')
        .eq('user_id', user.id)

      if (error) throw error

      // Sync with local store if needed
      // This is a simplified version - you might want to merge strategies
    } catch (error) {
      console.error('Error syncing cart:', error)
    }
  }, [user?.id, supabase])

  useEffect(() => {
    if (user?.id) {
      syncCartWithSupabase()
    }
  }, [user?.id, syncCartWithSupabase])

  const total = getTotal()
  const shipping = total > 10000 ? 0 : 500

  return (
    <div className="min-h-screen bg-wood-50 py-20">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-serif font-bold text-wood-900 mb-8">
          Корзина
        </h1>

        {cartItems.length === 0 ? (
          <div className="card-premium p-12 text-center">
            <ShoppingCart size={64} className="text-wood-300 mx-auto mb-4" />
            <h2 className="text-2xl font-semibold text-wood-900 mb-2">
              Ваша корзина пуста
            </h2>
            <p className="text-wood-600 mb-6">
              Добавьте товары в корзину, чтобы продолжить покупки
            </p>
            <Link href="/products" className="btn-primary inline-block">
              Перейти к каталогу
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-4">
              {cartItems.map((item) => (
                <div key={item.id} className="card-premium p-6 flex gap-6">
                  <div className="w-24 h-24 bg-gradient-to-br from-wood-200 to-wood-300 rounded-xl flex-shrink-0 flex items-center justify-center">
                    <span className="text-3xl">🪵</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-wood-900 mb-2">
                      {item.name}
                    </h3>
                    <p className="text-fire-600 font-bold text-xl mb-4">
                      {item.price.toLocaleString('ru-RU')} ₽
                    </p>
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-2 border-2 border-wood-200 rounded-xl">
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="p-2 hover:bg-wood-100 transition"
                        >
                          <Minus size={16} />
                        </button>
                        <span className="px-4 font-semibold">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="p-2 hover:bg-wood-100 transition"
                        >
                          <Plus size={16} />
                        </button>
                      </div>
                      <button
                        onClick={() => {
                          removeItem(item.id)
                          toast.success('Товар удален из корзины')
                        }}
                        className="text-wood-600 hover:text-red-600 transition p-2"
                      >
                        <Trash2 size={20} />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="lg:col-span-1">
              <div className="card-premium p-6 sticky top-24">
                <h2 className="text-2xl font-semibold text-wood-900 mb-6">
                  Итого
                </h2>
                <div className="space-y-4 mb-6">
                  <div className="flex justify-between text-wood-700">
                    <span>Товары</span>
                    <span>{total.toLocaleString('ru-RU')} ₽</span>
                  </div>
                  <div className="flex justify-between text-wood-700">
                    <span>Доставка</span>
                    <span>{shipping === 0 ? 'Бесплатно' : `${shipping.toLocaleString('ru-RU')} ₽`}</span>
                  </div>
                  <div className="border-t border-wood-200 pt-4">
                    <div className="flex justify-between text-xl font-bold text-wood-900">
                      <span>Всего</span>
                      <span>{(total + shipping).toLocaleString('ru-RU')} ₽</span>
                    </div>
                  </div>
                </div>
                <Link
                  href="/checkout"
                  className="w-full btn-primary mb-4 block text-center"
                >
                  Оформить заказ
                </Link>
                <Link
                  href="/products"
                  className="block text-center text-wood-600 hover:text-fire-600 transition"
                >
                  Продолжить покупки
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

