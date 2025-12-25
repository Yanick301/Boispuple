'use client'

import { useEffect, useCallback, useMemo } from 'react'
import { ShoppingCart, Trash2, Plus, Minus } from 'lucide-react'
import Link from 'next/link'
import { useTranslations } from 'next-intl'
import { useCartStore } from '@/lib/store/cartStore'
import { useAuth } from '@/components/AuthProvider'
import toast from 'react-hot-toast'

export default function CartPage() {
  const t = useTranslations()
  const cartItems = useCartStore((state) => state.items)
  const updateQuantity = useCartStore((state) => state.updateQuantity)
  const removeItem = useCartStore((state) => state.removeItem)
  const getTotal = useCartStore((state) => state.getTotal)
  const syncWithSupabase = useCartStore((state) => state.syncWithSupabase)
  const loadFromSupabase = useCartStore((state) => state.loadFromSupabase)
  const isSyncing = useCartStore((state) => state.isSyncing)
  const { user } = useAuth()

  // Sync cart with Supabase when user logs in
  useEffect(() => {
    if (user?.id) {
      // First load from Supabase
      loadFromSupabase(user.id).then(() => {
        // Then sync (merge if needed)
        syncWithSupabase(user.id)
      })
    }
  }, [user?.id, syncWithSupabase, loadFromSupabase])

  const handleUpdateQuantity = async (id: number, quantity: number) => {
    await updateQuantity(id, quantity)
    toast.success(t('cart.quantityUpdated'))
  }

  const handleRemoveItem = async (id: number) => {
    await removeItem(id)
    toast.success(t('cart.itemRemoved'))
  }

  const total = getTotal()
  const shipping = total > 10000 ? 0 : 500

  return (
    <div className="min-h-screen bg-wood-50 py-20">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-serif font-bold text-wood-900 mb-8">
          {t('cart.title')}
        </h1>

        {isSyncing && (
          <div className="mb-4 text-wood-600">
            {t('cart.syncing')}
          </div>
        )}

        {cartItems.length === 0 ? (
          <div className="card-premium p-12 text-center">
            <ShoppingCart size={64} className="text-wood-300 mx-auto mb-4" />
            <h2 className="text-2xl font-semibold text-wood-900 mb-2">
              {t('cart.empty')}
            </h2>
            <p className="text-wood-600 mb-6">
              {t('cart.emptyDescription')}
            </p>
            <Link href="/products" className="btn-primary inline-block">
              {t('cart.goToCatalog')}
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
                          onClick={() => handleUpdateQuantity(item.id, item.quantity - 1)}
                          className="p-2 hover:bg-wood-100 transition"
                          disabled={isSyncing}
                        >
                          <Minus size={16} />
                        </button>
                        <span className="px-4 font-semibold">{item.quantity}</span>
                        <button
                          onClick={() => handleUpdateQuantity(item.id, item.quantity + 1)}
                          className="p-2 hover:bg-wood-100 transition"
                          disabled={isSyncing}
                        >
                          <Plus size={16} />
                        </button>
                      </div>
                      <button
                        onClick={() => handleRemoveItem(item.id)}
                        className="text-wood-600 hover:text-red-600 transition p-2"
                        disabled={isSyncing}
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
                  {t('common.total')}
                </h2>
                <div className="space-y-4 mb-6">
                  <div className="flex justify-between text-wood-700">
                    <span>{t('common.items')}</span>
                    <span>{total.toLocaleString('ru-RU')} ₽</span>
                  </div>
                  <div className="flex justify-between text-wood-700">
                    <span>{t('common.shipping')}</span>
                    <span>{shipping === 0 ? t('common.free') : `${shipping.toLocaleString('ru-RU')} ₽`}</span>
                  </div>
                  <div className="border-t border-wood-200 pt-4">
                    <div className="flex justify-between text-xl font-bold text-wood-900">
                      <span>{t('common.total')}</span>
                      <span>{(total + shipping).toLocaleString('ru-RU')} ₽</span>
                    </div>
                  </div>
                </div>
                <Link
                  href="/checkout"
                  className="w-full btn-primary mb-4 block text-center"
                >
                  {t('common.checkout')}
                </Link>
                <Link
                  href="/products"
                  className="block text-center text-wood-600 hover:text-fire-600 transition"
                >
                  {t('common.continueShopping')}
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
