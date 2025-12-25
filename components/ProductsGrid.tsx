'use client'

import { useState, useEffect } from 'react'
import { ShoppingCart, Star, Heart, Filter } from 'lucide-react'
import { useTranslations } from 'next-intl'
import { useCartStore } from '@/lib/store/cartStore'
import { useFavoritesStore } from '@/lib/store/favoritesStore'
import toast from 'react-hot-toast'

interface Product {
  id: number
  name: string
  price: number
  originalPrice?: number
  rating: number
  reviews: number
  badge?: string
  category?: string
}

const allProducts: Product[] = [
  // Дрова
  { id: 1, name: 'Дрова дубовые 30 см - 3,1 стера', price: 4510, rating: 4.8, reviews: 124, badge: 'Хит продаж', category: 'firewood' },
  { id: 2, name: 'Дрова 25 см - 2,60 стера в упаковке', price: 4300, rating: 4.9, reviews: 89, category: 'firewood' },
  { id: 3, name: 'Дрова 30 см - 2,24 стера в упаковке', price: 3980, rating: 4.7, reviews: 156, category: 'firewood' },
  { id: 4, name: 'Палета 1 стер дров - готово к использованию', price: 1600, rating: 4.9, reviews: 203, badge: 'Популярное', category: 'firewood' },
  { id: 5, name: 'Дрова навалом 1м³', price: 890, rating: 4.6, reviews: 78, category: 'firewood' },
  { id: 6, name: 'Дрова навалом 50 см', price: 1200, rating: 4.5, reviews: 92, category: 'firewood' },
  { id: 7, name: 'Дрова 50 см в упаковке на палете 2 м³', price: 1990, rating: 4.8, reviews: 145, category: 'firewood' },
  { id: 8, name: 'Брикеты из дуба - длительного горения', price: 3550, rating: 4.9, reviews: 167, category: 'firewood' },
  
  // Пеллеты
  { id: 9, name: 'Пеллеты премиум ENERBIO - 66 мешков 990кг', price: 3950, originalPrice: 4500, rating: 4.8, reviews: 145, badge: 'Скидка', category: 'pellets' },
  { id: 10, name: 'Пеллеты премиум Crépito®', price: 4490, rating: 4.9, reviews: 203, category: 'pellets' },
  { id: 11, name: 'Пеллеты WOODAY - палета 65 мешков по 15 кг', price: 4350, rating: 4.7, reviews: 178, category: 'pellets' },
  { id: 12, name: 'Пеллеты премиум', price: 3600, rating: 4.6, reviews: 134, category: 'pellets' },
  { id: 13, name: 'Пеллеты VAN ROJE - палета 65 мешков', price: 4190, rating: 4.8, reviews: 156, category: 'pellets' },
  { id: 14, name: 'Пеллеты ПИРЕНЕИ - палета 65 мешков', price: 4300, rating: 4.9, reviews: 189, category: 'pellets' },
  
  // Печи
  { id: 15, name: 'Печь INTERSTOVES HUGO 9 | Дрова 50см - Черная', price: 6000, originalPrice: 6590, rating: 4.8, reviews: 67, badge: 'Скидка', category: 'stoves' },
  { id: 16, name: 'Печь панорамная двойная FIREMATIC Ottawa - 13.5 кВт', price: 18300, originalPrice: 31000, rating: 4.9, reviews: 45, badge: 'Скидка', category: 'stoves' },
  { id: 17, name: 'Печь панорамная 3 стороны FIREMATIC Calgary - 13.5 кВт', price: 17600, originalPrice: 31800, rating: 4.9, reviews: 52, badge: 'Скидка', category: 'stoves' },
  { id: 18, name: 'Печь Stovia Italia Danna 6кВт - WiFi', price: 11490, rating: 4.7, reviews: 89, category: 'stoves' },
  { id: 19, name: 'Печь INTERSTOVES GT | 15 кВт', price: 10490, rating: 4.8, reviews: 76, category: 'stoves' },
  { id: 20, name: 'Каминная топка Ecofire Confort 12 кВт', price: 15900, rating: 4.8, reviews: 93, category: 'stoves' },
  { id: 21, name: 'Печь-камин Nordica Isotta Plus 8 кВт', price: 12490, rating: 4.9, reviews: 78, badge: 'Хит продаж', category: 'stoves' },
  
  // Котлы
  { id: 22, name: 'Котел твердотопливный Protherm Бобер 40 DLO 35 кВт', price: 68900, originalPrice: 75000, rating: 4.8, reviews: 45, badge: 'Скидка', category: 'boilers' },
  { id: 23, name: 'Котел ZOTA Optima 20 20 кВт', price: 45900, rating: 4.7, reviews: 67, category: 'boilers' },
  { id: 24, name: 'Котел Буржуй-К Т-40 40 кВт', price: 124900, rating: 4.9, reviews: 34, badge: 'Премиум', category: 'boilers' },
  { id: 25, name: 'Котел твердотопливный НМК Магнум КДГ-20 ТЭ 20 кВт', price: 52900, rating: 4.6, reviews: 89, category: 'boilers' },
  { id: 26, name: 'Котел ZOTA Optima 30 30 кВт', price: 54900, rating: 4.8, reviews: 56, category: 'boilers' },
  { id: 27, name: 'Котел Protherm Бобер 50 DLO 48 кВт', price: 78900, rating: 4.9, reviews: 42, category: 'boilers' },
  
  // Аксессуары
  { id: 28, name: 'Термостат для котла комнатный', price: 3200, rating: 4.7, reviews: 145, category: 'accessories' },
  { id: 29, name: 'Колосниковая решетка для печи 30x25 см', price: 1890, rating: 4.6, reviews: 98, category: 'accessories' },
  { id: 30, name: 'Подставка под дрова металлическая', price: 4500, rating: 4.8, reviews: 167, badge: 'Популярное', category: 'accessories' },
  { id: 31, name: 'Кочерега кочерга для камина 120 см', price: 1500, rating: 4.5, reviews: 234, category: 'accessories' },
  { id: 32, name: 'Щипцы для дров 65 см', price: 1200, rating: 4.6, reviews: 189, category: 'accessories' },
  { id: 33, name: 'Ведро для золы металлическое 12 л', price: 890, rating: 4.7, reviews: 278, category: 'accessories' },
  { id: 34, name: 'Защитный экран для печи 100x70 см', price: 8900, rating: 4.8, reviews: 112, category: 'accessories' },
  { id: 35, name: 'Датчик температуры для котла', price: 2100, rating: 4.5, reviews: 156, category: 'accessories' },
  { id: 36, name: 'Труба дымохода стальная 115 мм 1 метр', price: 3200, rating: 4.7, reviews: 203, category: 'accessories' },
  { id: 37, name: 'Набор инструментов для камина (кочерга, щипцы, совок)', price: 3200, rating: 4.9, reviews: 145, badge: 'Комплект', category: 'accessories' },
]

interface ProductsGridProps {
  category?: string
}

export default function ProductsGrid({ category }: ProductsGridProps) {
  const t = useTranslations()
  const [showFilters, setShowFilters] = useState(false)
  const [sortBy, setSortBy] = useState('popular')
  const cartStore = useCartStore()
  const favoritesStore = useFavoritesStore()

  const handleAddToCart = async (product: Product) => {
    await cartStore.addItem({
      id: product.id,
      name: product.name,
      price: product.price,
    })
    toast.success(t('products.addedToCart'))
  }

  const handleToggleFavorite = (product: Product) => {
    const wasFavorite = favoritesStore.isFavorite(product.id)
    favoritesStore.toggleFavorite({
      id: product.id,
      name: product.name,
      price: product.price,
    })
    toast.success(
      !wasFavorite ? t('products.addedToFavorites') : t('products.removedFromFavorites')
    )
  }

  const filteredProducts = category
    ? allProducts.filter(p => p.category === category)
    : allProducts

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case 'price-low':
        return a.price - b.price
      case 'price-high':
        return b.price - a.price
      case 'rating':
        return b.rating - a.rating
      default:
        return b.reviews - a.reviews
    }
  })

  return (
    <div>
      {/* Filters and Sort */}
      <div className="bg-white rounded-lg shadow-md p-3 sm:p-4 mb-4 sm:mb-6 flex flex-col sm:flex-row justify-between items-stretch sm:items-center gap-3 sm:gap-4">
        <button
          onClick={() => setShowFilters(!showFilters)}
          className="flex items-center justify-center gap-2 text-wood-700 hover:text-fire-600 transition px-4 py-2 sm:py-2.5 border border-wood-200 rounded-lg hover:bg-wood-50 sm:border-0 sm:px-0"
        >
          <Filter size={18} className="sm:w-5 sm:h-5" />
          <span className="text-sm sm:text-base">{t('common.search')}</span>
        </button>
        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          className="px-3 sm:px-4 py-2 text-sm sm:text-base border border-wood-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-fire-500 bg-white"
        >
          <option value="popular">{t('products.popular')}</option>
          <option value="price-low">{t('products.priceLow')}</option>
          <option value="price-high">{t('products.priceHigh')}</option>
          <option value="rating">{t('products.rating')}</option>
        </select>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
        {sortedProducts.map((product) => (
          <div key={product.id} className="card group">
            <div className="relative overflow-hidden bg-wood-100">
              {product.badge && (
                <div className="absolute top-3 left-3 sm:top-4 sm:left-4 z-10">
                  <span className="bg-fire-600 text-white px-2 py-0.5 sm:px-3 sm:py-1 rounded-full text-xs sm:text-sm font-semibold">
                    {product.badge}
                  </span>
                </div>
              )}
              <div className="absolute top-3 right-3 sm:top-4 sm:right-4 z-10">
                <button
                  onClick={() => handleToggleFavorite(product)}
                  className="p-1.5 sm:p-2 bg-white/90 hover:bg-white rounded-full transition"
                  aria-label={t('common.addToFavorites')}
                >
                  <Heart
                    size={16}
                    className={`sm:w-5 sm:h-5 ${favoritesStore.isFavorite(product.id) ? 'text-red-500 fill-red-500' : 'text-wood-600'}`}
                  />
                </button>
              </div>
              <div className="aspect-square flex items-center justify-center">
                <div className="w-full h-full bg-gradient-to-br from-wood-200 to-wood-300 flex items-center justify-center">
                  <span className="text-wood-400 text-3xl sm:text-4xl">🪵</span>
                </div>
              </div>
            </div>

            <div className="p-4 sm:p-6">
              <div className="flex items-center gap-1.5 sm:gap-2 mb-2">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={12}
                      className={`sm:w-3.5 sm:h-3.5 ${i < Math.floor(product.rating) ? 'text-fire-500 fill-fire-500' : 'text-wood-300'}`}
                    />
                  ))}
                </div>
                <span className="text-xs sm:text-sm text-wood-600">({product.reviews} {t('products.reviews')})</span>
              </div>

              <h3 className="text-base sm:text-lg font-semibold text-wood-900 mb-2 sm:mb-3 line-clamp-2 min-h-[3rem]">
                {product.name}
              </h3>

              <div className="flex items-center justify-between mb-3 sm:mb-4">
                <div>
                  {product.originalPrice ? (
                    <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2">
                      <span className="text-wood-400 line-through text-xs sm:text-sm">
                        {product.originalPrice.toLocaleString('ru-RU')} ₽
                      </span>
                      <span className="text-xl sm:text-2xl font-bold text-fire-600">
                        {product.price.toLocaleString('ru-RU')} ₽
                      </span>
                    </div>
                  ) : (
                    <span className="text-xl sm:text-2xl font-bold text-wood-900">
                      {product.price.toLocaleString('ru-RU')} ₽
                    </span>
                  )}
                </div>
              </div>

              <button
                onClick={() => handleAddToCart(product)}
                className="w-full btn-primary flex items-center justify-center gap-2 text-sm sm:text-base py-2.5 sm:py-3"
              >
                <ShoppingCart size={18} className="sm:w-5 sm:h-5" />
                {t('common.addToCart')}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

