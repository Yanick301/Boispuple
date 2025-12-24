import ProductsGrid from '@/components/ProductsGrid'
import { Package, Leaf, Flame, Award } from 'lucide-react'

export default function PelletsPage() {
  return (
    <div className="py-12 bg-wood-50 min-h-screen">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="mb-12 text-center">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-wood-900 mb-4">
            Пеллеты и гранулы
          </h1>
          <p className="text-lg text-wood-600 max-w-3xl mx-auto">
            Экологичные пеллеты премиум класса для эффективного и экономичного отопления. 
            Высокая теплоотдача и удобство использования.
          </p>
        </div>

        {/* Features Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-white rounded-xl shadow-md p-6 text-center">
            <Leaf className="text-fire-600 mx-auto mb-4" size={40} />
            <h3 className="text-xl font-semibold text-wood-900 mb-2">Экологично</h3>
            <p className="text-wood-600">100% натуральный продукт из древесных отходов</p>
          </div>
          <div className="bg-white rounded-xl shadow-md p-6 text-center">
            <Flame className="text-fire-600 mx-auto mb-4" size={40} />
            <h3 className="text-xl font-semibold text-wood-900 mb-2">Высокая эффективность</h3>
            <p className="text-wood-600">Теплотворность до 5 кВт·ч/кг, низкая зольность</p>
          </div>
          <div className="bg-white rounded-xl shadow-md p-6 text-center">
            <Award className="text-fire-600 mx-auto mb-4" size={40} />
            <h3 className="text-xl font-semibold text-wood-900 mb-2">Премиум качество</h3>
            <p className="text-wood-600">Соответствие европейским стандартам EN Plus A1</p>
          </div>
        </div>

        {/* Description Section */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
          <h2 className="text-3xl font-serif font-bold text-wood-900 mb-6">
            О пеллетах
          </h2>
          <div className="prose prose-lg max-w-none text-wood-700 space-y-4">
            <p>
              Пеллеты — это современное топливо, производимое из прессованных древесных отходов. 
              Они представляют собой цилиндрические гранулы стандартного размера, которые идеально 
              подходят для автоматических пеллетных котлов и каминов.
            </p>
            <p>
              <strong>Преимущества пеллет:</strong> Пеллеты обладают высокой теплотворной способностью 
              при низкой влажности (менее 10%). Они горят чисто, оставляя минимальное количество золы, 
              и не требуют постоянного контроля, так как автоматические системы подачи топлива работают 
              самостоятельно.
            </p>
            <p>
              <strong>Упаковка:</strong> Пеллеты поставляются в мешках по 15 кг, упакованных на палетах 
              по 65-66 мешков. Это удобно для хранения и транспортировки. Один мешок обеспечивает до 
              75 кВт·ч тепловой энергии.
            </p>
            <div className="bg-wood-50 rounded-lg p-6 mt-6">
              <h3 className="text-xl font-semibold text-wood-900 mb-3 flex items-center gap-2">
                <Package className="text-fire-600" size={24} />
                Почему выбирают наши пеллеты
              </h3>
              <ul className="list-disc list-inside space-y-2 text-wood-700">
                <li>Низкая влажность (менее 10%) — максимальная эффективность</li>
                <li>Минимальная зольность (менее 0,5%) — меньше очистки оборудования</li>
                <li>Высокая плотность — больше энергии в меньшем объеме</li>
                <li>Экологически чистый продукт — без добавок и химикатов</li>
                <li>Удобная упаковка — легко хранить и транспортировать</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Products Grid */}
        <ProductsGrid category="pellets" />
      </div>
    </div>
  )
}

