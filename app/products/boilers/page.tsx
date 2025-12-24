import ProductsGrid from '@/components/ProductsGrid'
import { Zap, Settings, Shield, TrendingUp } from 'lucide-react'

export default function BoilersPage() {
  return (
    <div className="py-12 bg-wood-50 min-h-screen">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="mb-12 text-center">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-wood-900 mb-4">
            Котлы на твердом топливе
          </h1>
          <p className="text-lg text-wood-600 max-w-3xl mx-auto">
            Эффективные котлы для полного отопления вашего дома. 
            Надежность, экономичность и долговечность от проверенных производителей.
          </p>
        </div>

        {/* Features Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          <div className="bg-white rounded-xl shadow-md p-6 text-center">
            <Zap className="text-fire-600 mx-auto mb-4" size={40} />
            <h3 className="text-xl font-semibold text-wood-900 mb-2">Высокий КПД</h3>
            <p className="text-wood-600 text-sm">Эффективность до 92%, экономия топлива</p>
          </div>
          <div className="bg-white rounded-xl shadow-md p-6 text-center">
            <Settings className="text-fire-600 mx-auto mb-4" size={40} />
            <h3 className="text-xl font-semibold text-wood-900 mb-2">Автоматика</h3>
            <p className="text-wood-600 text-sm">Автоматическая подача топлива и регуляция</p>
          </div>
          <div className="bg-white rounded-xl shadow-md p-6 text-center">
            <Shield className="text-fire-600 mx-auto mb-4" size={40} />
            <h3 className="text-xl font-semibold text-wood-900 mb-2">Надежность</h3>
            <p className="text-wood-600 text-sm">Прочные материалы, долгий срок службы</p>
          </div>
          <div className="bg-white rounded-xl shadow-md p-6 text-center">
            <TrendingUp className="text-fire-600 mx-auto mb-4" size={40} />
            <h3 className="text-xl font-semibold text-wood-900 mb-2">Экономия</h3>
            <p className="text-wood-600 text-sm">Низкий расход топлива, выгодная эксплуатация</p>
          </div>
        </div>

        {/* Description Section */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
          <h2 className="text-3xl font-serif font-bold text-wood-900 mb-6">
            О котлах на твердом топливе
          </h2>
          <div className="prose prose-lg max-w-none text-wood-700 space-y-4">
            <p>
              Современные котлы на твердом топливе — это надежное и экономичное решение для отопления 
              частных домов, коттеджей и коммерческих помещений. Они работают на дровах, пеллетах, 
              угле и других видах твердого топлива.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
              <div>
                <h3 className="text-xl font-semibold text-wood-900 mb-3">Преимущества:</h3>
                <ul className="list-disc list-inside space-y-2 text-wood-700">
                  <li>Независимость от газовых и электрических сетей</li>
                  <li>Высокая эффективность и длительное горение</li>
                  <li>Автоматическая подача топлива (в пеллетных моделях)</li>
                  <li>Возможность комбинирования с другими источниками тепла</li>
                  <li>Длительный срок службы (более 15 лет)</li>
                  <li>Экологичность при использовании пеллет</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-wood-900 mb-3">Типы котлов:</h3>
                <ul className="list-disc list-inside space-y-2 text-wood-700">
                  <li>Классические котлы на дровах и угле</li>
                  <li>Пеллетные котлы с автоматической подачей</li>
                  <li>Котлы длительного горения</li>
                  <li>Комбинированные котлы (дрова + пеллеты)</li>
                  <li>Пиролизные котлы</li>
                  <li>Котлы с ТЭНами для поддержания температуры</li>
                </ul>
              </div>
            </div>
            <div className="bg-wood-50 rounded-lg p-6 mt-6">
              <h3 className="text-xl font-semibold text-wood-900 mb-3">
                Выбор мощности котла
              </h3>
              <p className="text-wood-700 mb-3">
                Для правильного выбора мощности котла необходимо учитывать площадь и объем отапливаемых 
                помещений, качество утепления, климатические условия региона. 
              </p>
              <p className="text-wood-700">
                <strong>Примерный расчет:</strong> Для хорошо утепленного дома требуется 1 кВт мощности 
                на каждые 10 м² площади при высоте потолков 2,5-3 метра. Для домов с плохим утеплением 
                мощность может потребоваться в 1,5-2 раза больше.
              </p>
            </div>
          </div>
        </div>

        {/* Products Grid */}
        <ProductsGrid category="boilers" />
      </div>
    </div>
  )
}

