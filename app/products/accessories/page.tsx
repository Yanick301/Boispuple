import ProductsGrid from '@/components/ProductsGrid'
import { Wrench, Shield, Package, Sparkles } from 'lucide-react'

export default function AccessoriesPage() {
  return (
    <div className="py-12 bg-wood-50 min-h-screen">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="mb-12 text-center">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-wood-900 mb-4">
            Аксессуары для отопления
          </h1>
          <p className="text-lg text-wood-600 max-w-3xl mx-auto">
            Все необходимое для комфортного и безопасного использования печей, каминов и котлов. 
            Инструменты, комплектующие и аксессуары высокого качества.
          </p>
        </div>

        {/* Features Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          <div className="bg-white rounded-xl shadow-md p-6 text-center">
            <Wrench className="text-fire-600 mx-auto mb-4" size={40} />
            <h3 className="text-xl font-semibold text-wood-900 mb-2">Инструменты</h3>
            <p className="text-wood-600 text-sm">Кочерги, щипцы, совки для ухода за камином</p>
          </div>
          <div className="bg-white rounded-xl shadow-md p-6 text-center">
            <Package className="text-fire-600 mx-auto mb-4" size={40} />
            <h3 className="text-xl font-semibold text-wood-900 mb-2">Комплектующие</h3>
            <p className="text-wood-600 text-sm">Дымоходы, решетки, термостаты и датчики</p>
          </div>
          <div className="bg-white rounded-xl shadow-md p-6 text-center">
            <Shield className="text-fire-600 mx-auto mb-4" size={40} />
            <h3 className="text-xl font-semibold text-wood-900 mb-2">Безопасность</h3>
            <p className="text-wood-600 text-sm">Защитные экраны и противопожарные аксессуары</p>
          </div>
          <div className="bg-white rounded-xl shadow-md p-6 text-center">
            <Sparkles className="text-fire-600 mx-auto mb-4" size={40} />
            <h3 className="text-xl font-semibold text-wood-900 mb-2">Удобство</h3>
            <p className="text-wood-600 text-sm">Подставки, ведра для золы, системы хранения</p>
          </div>
        </div>

        {/* Description Section */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
          <h2 className="text-3xl font-serif font-bold text-wood-900 mb-6">
            Категории аксессуаров
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-wood-900 mb-3">Инструменты для камина</h3>
              <p className="text-wood-700 mb-3">
                Комплекты инструментов включают кочергу, щипцы для дров, совок для золы и метелку. 
                Изготовлены из высококачественной стали с защитным покрытием. Длина инструментов 
                позволяет безопасно работать с горящим камином.
              </p>
              <ul className="list-disc list-inside space-y-1 text-wood-700">
                <li>Кочерги различной длины (от 65 до 120 см)</li>
                <li>Щипцы для дров</li>
                <li>Совки и ведра для золы</li>
                <li>Комплекты инструментов</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-wood-900 mb-3">Комплектующие и запчасти</h3>
              <p className="text-wood-700 mb-3">
                Запасные части и комплектующие для печей и котлов: колосниковые решетки, 
                термостаты, датчики температуры, элементы дымохода. Все детали соответствуют 
                стандартам качества и совместимы с различными моделями оборудования.
              </p>
              <ul className="list-disc list-inside space-y-1 text-wood-700">
                <li>Колосниковые решетки</li>
                <li>Термостаты и датчики</li>
                <li>Элементы дымохода</li>
                <li>Запасные части для котлов</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-wood-900 mb-3">Защитные аксессуары</h3>
              <p className="text-wood-700 mb-3">
                Защитные экраны и ограждения для безопасного использования печей и каминов, 
                особенно важны в домах с детьми. Изготовлены из прочных материалов, 
                выдерживающих высокие температуры.
              </p>
              <ul className="list-disc list-inside space-y-1 text-wood-700">
                <li>Защитные экраны для печей</li>
                <li>Ограждения для каминов</li>
                <li>Термостойкие коврики</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-wood-900 mb-3">Аксессуары для хранения</h3>
              <p className="text-wood-700 mb-3">
                Удобные решения для хранения дров: подставки, корзины, полки. Изготовлены 
                из прочных материалов, выдерживающих вес дров и устойчивых к атмосферным воздействиям.
              </p>
              <ul className="list-disc list-inside space-y-1 text-wood-700">
                <li>Металлические подставки для дров</li>
                <li>Декоративные корзины</li>
                <li>Полки для хранения</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Products Grid */}
        <ProductsGrid category="accessories" />
      </div>
    </div>
  )
}

