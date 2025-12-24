import ProductsGrid from '@/components/ProductsGrid'
import { TreePine, Award, Truck, Flame } from 'lucide-react'

export default function FirewoodPage() {
  return (
    <div className="py-8 sm:py-12 bg-wood-50 min-h-screen">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Hero Section */}
        <div className="mb-8 sm:mb-12 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-wood-900 mb-3 sm:mb-4 px-4">
            Дрова для отопления
          </h1>
          <p className="text-base sm:text-lg text-wood-600 max-w-3xl mx-auto px-4">
            Высококачественные дрова различных пород дерева. Правильно высушенные и подготовленные для эффективного отопления вашего дома.
          </p>
        </div>

        {/* Features Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 mb-8 sm:mb-12">
          <div className="bg-white rounded-xl shadow-md p-5 sm:p-6 text-center">
            <TreePine className="text-fire-600 mx-auto mb-3 sm:mb-4" size={32} />
            <h3 className="text-lg sm:text-xl font-semibold text-wood-900 mb-2">Различные породы</h3>
            <p className="text-sm sm:text-base text-wood-600">Дуб, береза, ольха, сосна и другие породы дерева</p>
          </div>
          <div className="bg-white rounded-xl shadow-md p-5 sm:p-6 text-center">
            <Award className="text-fire-600 mx-auto mb-3 sm:mb-4" size={32} />
            <h3 className="text-lg sm:text-xl font-semibold text-wood-900 mb-2">Высокое качество</h3>
            <p className="text-sm sm:text-base text-wood-600">Влажность не более 20%, оптимальная для горения</p>
          </div>
          <div className="bg-white rounded-xl shadow-md p-5 sm:p-6 text-center sm:col-span-2 md:col-span-1">
            <Truck className="text-fire-600 mx-auto mb-3 sm:mb-4" size={32} />
            <h3 className="text-lg sm:text-xl font-semibold text-wood-900 mb-2">Быстрая доставка</h3>
            <p className="text-sm sm:text-base text-wood-600">Доставка в течение 48 часов по всей России</p>
          </div>
        </div>

        {/* Description Section */}
        <div className="bg-white rounded-xl shadow-lg p-6 sm:p-8 mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-wood-900 mb-4 sm:mb-6">
            О наших дровах
          </h2>
          <div className="prose prose-sm sm:prose-base md:prose-lg max-w-none text-wood-700 space-y-3 sm:space-y-4 text-sm sm:text-base">
            <p>
              Мы предлагаем только качественные дрова, которые прошли строгий контроль влажности и качества. 
              Все дрова правильно сушатся и хранятся в оптимальных условиях, что гарантирует высокую теплоотдачу 
              и долгое горение.
            </p>
            <p>
              <strong>Породы дерева:</strong> Дубовые дрова обладают высокой теплоотдачей и горят долго. 
              Березовые дрова легко разжигаются и дают жаркое пламя. Ольха горит практически без дыма и сажи. 
              Сосновые дрова быстро разгораются и дают много тепла.
            </p>
            <p>
              <strong>Размеры:</strong> Мы предлагаем дрова различных размеров - от 25 см до 50 см, 
              упакованные в стеры или на палетах. Также доступны дрова навалом для оптовых покупателей.
            </p>
            <div className="bg-wood-50 rounded-lg p-6 mt-6">
              <h3 className="text-xl font-semibold text-wood-900 mb-3 flex items-center gap-2">
                <Flame className="text-fire-600" size={24} />
                Преимущества наших дров
              </h3>
              <ul className="list-disc list-inside space-y-2 text-wood-700">
                <li>Влажность не более 20% - оптимально для эффективного горения</li>
                <li>Правильная форма и размер - удобно складывать и использовать</li>
                <li>Экологически чистый продукт без химической обработки</li>
                <li>Высокая теплоотдача и длительное горение</li>
                <li>Гарантия качества на всю продукцию</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Products Grid */}
        <ProductsGrid category="firewood" />
      </div>
    </div>
  )
}

