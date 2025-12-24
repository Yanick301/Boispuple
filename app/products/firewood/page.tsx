import ProductsGrid from '@/components/ProductsGrid'
import { TreePine, Award, Truck, Flame } from 'lucide-react'

export default function FirewoodPage() {
  return (
    <div className="py-12 bg-wood-50 min-h-screen">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="mb-12 text-center">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-wood-900 mb-4">
            Дрова для отопления
          </h1>
          <p className="text-lg text-wood-600 max-w-3xl mx-auto">
            Высококачественные дрова различных пород дерева. Правильно высушенные и подготовленные для эффективного отопления вашего дома.
          </p>
        </div>

        {/* Features Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-white rounded-xl shadow-md p-6 text-center">
            <TreePine className="text-fire-600 mx-auto mb-4" size={40} />
            <h3 className="text-xl font-semibold text-wood-900 mb-2">Различные породы</h3>
            <p className="text-wood-600">Дуб, береза, ольха, сосна и другие породы дерева</p>
          </div>
          <div className="bg-white rounded-xl shadow-md p-6 text-center">
            <Award className="text-fire-600 mx-auto mb-4" size={40} />
            <h3 className="text-xl font-semibold text-wood-900 mb-2">Высокое качество</h3>
            <p className="text-wood-600">Влажность не более 20%, оптимальная для горения</p>
          </div>
          <div className="bg-white rounded-xl shadow-md p-6 text-center">
            <Truck className="text-fire-600 mx-auto mb-4" size={40} />
            <h3 className="text-xl font-semibold text-wood-900 mb-2">Быстрая доставка</h3>
            <p className="text-wood-600">Доставка в течение 48 часов по всей России</p>
          </div>
        </div>

        {/* Description Section */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
          <h2 className="text-3xl font-serif font-bold text-wood-900 mb-6">
            О наших дровах
          </h2>
          <div className="prose prose-lg max-w-none text-wood-700 space-y-4">
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

