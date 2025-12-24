import ProductsGrid from '@/components/ProductsGrid'
import { Flame, Zap, Shield, Sparkles } from 'lucide-react'

export default function StovesPage() {
  return (
    <div className="py-8 sm:py-12 bg-wood-50 min-h-screen">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Hero Section */}
        <div className="mb-8 sm:mb-12 text-center">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-wood-900 mb-4">
            Печи и камины
          </h1>
          <p className="text-lg text-wood-600 max-w-3xl mx-auto">
            Современные печи и камины для создания уюта и тепла в вашем доме. 
            Эффективные, безопасные и элегантные решения для отопления.
          </p>
        </div>

        {/* Features Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          <div className="bg-white rounded-xl shadow-md p-6 text-center">
            <Flame className="text-fire-600 mx-auto mb-4" size={40} />
            <h3 className="text-xl font-semibold text-wood-900 mb-2">Высокая эффективность</h3>
            <p className="text-wood-600 text-sm">КПД до 85%, экономичное использование топлива</p>
          </div>
          <div className="bg-white rounded-xl shadow-md p-6 text-center">
            <Sparkles className="text-fire-600 mx-auto mb-4" size={40} />
            <h3 className="text-xl font-semibold text-wood-900 mb-2">Современный дизайн</h3>
            <p className="text-wood-600 text-sm">Элегантные модели от европейских производителей</p>
          </div>
          <div className="bg-white rounded-xl shadow-md p-6 text-center">
            <Zap className="text-fire-600 mx-auto mb-4" size={40} />
            <h3 className="text-xl font-semibold text-wood-900 mb-2">Умные функции</h3>
            <p className="text-wood-600 text-sm">WiFi управление, автоматическая регуляция</p>
          </div>
          <div className="bg-white rounded-xl shadow-md p-6 text-center">
            <Shield className="text-fire-600 mx-auto mb-4" size={40} />
            <h3 className="text-xl font-semibold text-wood-900 mb-2">Безопасность</h3>
            <p className="text-wood-600 text-sm">Защита от перегрева, долговечные материалы</p>
          </div>
        </div>

        {/* Description Section */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
          <h2 className="text-3xl font-serif font-bold text-wood-900 mb-6">
            О печах и каминах
          </h2>
          <div className="prose prose-lg max-w-none text-wood-700 space-y-4">
            <p>
              Наш ассортимент включает широкий выбор современных печей и каминов от ведущих 
              европейских производителей. От компактных печей для небольших помещений до 
              мощных панорамных каминов для просторных залов.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
              <div>
                <h3 className="text-xl font-semibold text-wood-900 mb-3">Типы печей:</h3>
                <ul className="list-disc list-inside space-y-2 text-wood-700">
                  <li>Печи-камины с панорамным стеклом</li>
                  <li>Компактные печи для дач и небольших домов</li>
                  <li>Мощные печи для больших помещений (до 15 кВт)</li>
                  <li>Печи с системой длительного горения</li>
                  <li>Каминные топки для встраивания</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-wood-900 mb-3">Особенности:</h3>
                <ul className="list-disc list-inside space-y-2 text-wood-700">
                  <li>Высокий КПД (до 85%)</li>
                  <li>Длительное горение на одной загрузке</li>
                  <li>Управление через WiFi (в некоторых моделях)</li>
                  <li>Современный дизайн и качественные материалы</li>
                  <li>Простота установки и обслуживания</li>
                </ul>
              </div>
            </div>
            <div className="bg-fire-50 rounded-lg p-6 mt-6 border-l-4 border-fire-600">
              <h3 className="text-xl font-semibold text-wood-900 mb-3">
                Как выбрать печь?
              </h3>
              <p className="text-wood-700 mb-3">
                При выборе печи важно учитывать объем отапливаемого помещения. 
                Для расчета мощности используйте формулу: 1 кВт мощности обогревает примерно 10 м³ 
                хорошо утепленного помещения.
              </p>
              <p className="text-wood-700">
                Наши консультанты помогут подобрать идеальную модель для вашего дома. 
                Все печи поставляются с полным комплектом для установки и инструкцией.
              </p>
            </div>
          </div>
        </div>

        {/* Products Grid */}
        <ProductsGrid category="stoves" />
      </div>
    </div>
  )
}

