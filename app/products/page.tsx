import ProductsGrid from '@/components/ProductsGrid'
import Link from 'next/link'
import { TreePine, Package, Flame, Wrench, Truck, ArrowRight } from 'lucide-react'

const categories = [
  {
    name: 'Дрова для отопления',
    description: 'Высококачественные дрова различных пород',
    href: '/products/firewood',
    icon: TreePine,
    color: 'from-fire-500 to-fire-700',
  },
  {
    name: 'Пеллеты и гранулы',
    description: 'Экологичные пеллеты премиум класса',
    href: '/products/pellets',
    icon: Package,
    color: 'from-wood-500 to-wood-700',
  },
  {
    name: 'Печи и камины',
    description: 'Современные печи и камины для дома',
    href: '/products/stoves',
    icon: Flame,
    color: 'from-fire-600 to-fire-800',
  },
  {
    name: 'Котлы',
    description: 'Эффективные котлы на твердом топливе',
    href: '/products/boilers',
    icon: Wrench,
    color: 'from-wood-600 to-wood-800',
  },
  {
    name: 'Аксессуары',
    description: 'Все необходимое для отопления',
    href: '/products/accessories',
    icon: Truck,
    color: 'from-fire-500 to-wood-600',
  },
]

export default function ProductsPage() {
  return (
    <div className="py-8 sm:py-12 bg-wood-50 min-h-screen">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Hero Section */}
        <div className="mb-8 sm:mb-12 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-wood-900 mb-3 sm:mb-4 px-4">
            Все товары
          </h1>
          <p className="text-base sm:text-lg text-wood-600 max-w-3xl mx-auto px-4">
            Широкий ассортимент продукции для отопления вашего дома. 
            От дров и пеллет до печей, котлов и аксессуаров — все для комфорта и тепла.
          </p>
        </div>

        {/* Categories Quick Links */}
        <div className="mb-8 sm:mb-12">
          <h2 className="text-xl sm:text-2xl font-semibold text-wood-900 mb-4 sm:mb-6 px-2">
            Категории товаров
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {categories.map((category) => {
              const Icon = category.icon
              return (
                <Link
                  key={category.name}
                  href={category.href}
                  className="card group hover:shadow-2xl transition-all duration-300"
                >
                  <div className={`bg-gradient-to-br ${category.color} p-5 sm:p-6 text-white rounded-t-xl`}>
                    <Icon size={28} className="sm:w-8 sm:h-8 mb-2 sm:mb-3" />
                    <h3 className="text-lg sm:text-xl font-semibold mb-1 sm:mb-2">{category.name}</h3>
                    <p className="text-white/90 text-xs sm:text-sm">{category.description}</p>
                  </div>
                  <div className="p-3 sm:p-4 flex items-center justify-between text-fire-600 font-semibold group-hover:translate-x-2 transition-transform text-sm sm:text-base">
                    <span>Смотреть товары</span>
                    <ArrowRight size={18} className="sm:w-5 sm:h-5" />
                  </div>
                </Link>
              )
            })}
          </div>
        </div>

        {/* All Products Grid */}
        <div className="mb-6 sm:mb-8">
          <h2 className="text-xl sm:text-2xl font-semibold text-wood-900 mb-4 sm:mb-6 px-2">
            Все товары
          </h2>
        </div>
        <ProductsGrid />
      </div>
    </div>
  )
}

