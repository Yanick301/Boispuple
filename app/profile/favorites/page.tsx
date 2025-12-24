'use client'

import { useEffect, useState, useCallback, useMemo } from 'react'
import { useRouter } from 'next/navigation'
import { useAuth } from '@/components/AuthProvider'
import { createClient } from '@/lib/supabase/client'
import { useFavoritesStore } from '@/lib/store/favoritesStore'
import { Heart, ShoppingCart, Trash2 } from 'lucide-react'
import { useCartStore } from '@/lib/store/cartStore'
import toast from 'react-hot-toast'

export default function FavoritesPage() {
  const { user, loading: authLoading } = useAuth()
  const router = useRouter()
  const supabase = useMemo(() => createClient(), [])
  const favoritesStore = useFavoritesStore()
  const cartStore = useCartStore()
  const [loading, setLoading] = useState(true)

  const loadFavorites = useCallback(async () => {
    if (!user?.id) {
      setLoading(false)
      return
    }
    
    try {
      const { data, error } = await supabase
        .from('user_favorites')
        .select('*')
        .eq('user_id', user.id)

      if (error) throw error

      // Sync with local storage
      if (data) {
        data.forEach((item) => {
          favoritesStore.addFavorite({
            id: item.product_id,
            name: item.product_name,
            price: item.price,
          })
        })
      }
    } catch (error: any) {
      console.error('Error loading favorites:', error)
    } finally {
      setLoading(false)
    }
  }, [user?.id, supabase, favoritesStore])

  useEffect(() => {
    if (!authLoading && !user) {
      router.push('/login')
      return
    }

    if (user) {
      loadFavorites()
    }
  }, [user, authLoading, router, loadFavorites])

  const handleRemoveFavorite = async (id: number) => {
    favoritesStore.removeFavorite(id)
    
    if (user) {
      try {
        await supabase
          .from('user_favorites')
          .delete()
          .eq('user_id', user.id)
          .eq('product_id', id)
      } catch (error) {
        console.error('Error removing favorite:', error)
      }
    }
    
    toast.success('Удалено из избранного')
  }

  const handleAddToCart = (item: typeof favoritesStore.items[0]) => {
    cartStore.addItem(item)
    toast.success('Добавлено в корзину')
  }

  if (authLoading || loading) {
    return (
      <div className="min-h-screen bg-wood-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-fire-600 mx-auto"></div>
          <p className="mt-4 text-wood-600">Загрузка...</p>
        </div>
      </div>
    )
  }

  if (!user) return null

  const favorites = favoritesStore.items

  return (
    <div className="min-h-screen bg-gradient-to-br from-wood-50 via-white to-wood-50 py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-wood-900 mb-8">
            Избранное
          </h1>

          {favorites.length === 0 ? (
            <div className="card-premium p-12 text-center">
              <Heart size={64} className="text-wood-300 mx-auto mb-4" />
              <h2 className="text-2xl font-semibold text-wood-900 mb-2">
                Ваш список избранного пуст
              </h2>
              <p className="text-wood-600 mb-6">
                Добавьте товары в избранное, чтобы вернуться к ним позже
              </p>
              <a href="/products" className="btn-primary inline-block">
                Перейти к каталогу
              </a>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {favorites.map((item) => (
                <div key={item.id} className="card-premium group">
                  <div className="relative overflow-hidden bg-wood-100">
                    <div className="aspect-square flex items-center justify-center">
                      <span className="text-wood-400 text-4xl">🪵</span>
                    </div>
                    <div className="absolute top-4 right-4">
                      <button
                        onClick={() => handleRemoveFavorite(item.id)}
                        className="p-2 bg-white/90 hover:bg-white rounded-full transition"
                      >
                        <Trash2 size={20} className="text-red-600" />
                      </button>
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="text-lg font-semibold text-wood-900 mb-3 line-clamp-2">
                      {item.name}
                    </h3>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-2xl font-bold text-fire-600">
                        {item.price.toLocaleString('ru-RU')} ₽
                      </span>
                    </div>
                    <button
                      onClick={() => handleAddToCart(item)}
                      className="w-full btn-primary flex items-center justify-center gap-2"
                    >
                      <ShoppingCart size={20} />
                      В корзину
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

