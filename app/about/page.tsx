import { Award, Users, Truck, Heart } from 'lucide-react'

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-wood-900 via-wood-800 to-fire-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6">
              О компании ДРОВА ПРЕМИУМ
            </h1>
            <p className="text-xl text-wood-200">
              Ваш надежный партнер в обеспечении тепла и уюта
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none mb-12">
              <h2 className="text-3xl font-serif font-bold text-wood-900 mb-6">
                Наша история
              </h2>
              <p className="text-wood-700 mb-4 text-lg leading-relaxed">
                ДРОВА ПРЕМИУМ — это компания с многолетним опытом работы на рынке 
                отопительных материалов. Мы специализируемся на поставке высококачественных 
                дров, пеллет, печей и аксессуаров для отопления по всей России.
              </p>
              <p className="text-wood-700 mb-4 text-lg leading-relaxed">
                Наша миссия — обеспечить каждого клиента качественными продуктами, 
                которые создают тепло и уют в доме. Мы тщательно отбираем поставщиков, 
                контролируем качество на каждом этапе и гарантируем быструю доставку.
              </p>
            </div>

            {/* Values */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
              <div className="bg-wood-50 p-8 rounded-xl">
                <Award className="text-fire-600 mb-4" size={40} />
                <h3 className="text-2xl font-semibold text-wood-900 mb-3">Качество</h3>
                <p className="text-wood-700">
                  Мы предлагаем только премиальную продукцию, прошедшую строгий контроль качества.
                </p>
              </div>
              <div className="bg-wood-50 p-8 rounded-xl">
                <Users className="text-fire-600 mb-4" size={40} />
                <h3 className="text-2xl font-semibold text-wood-900 mb-3">Клиенты</h3>
                <p className="text-wood-700">
                  Более 50 000 довольных клиентов по всей России доверяют нам.
                </p>
              </div>
              <div className="bg-wood-50 p-8 rounded-xl">
                <Truck className="text-fire-600 mb-4" size={40} />
                <h3 className="text-2xl font-semibold text-wood-900 mb-3">Доставка</h3>
                <p className="text-wood-700">
                  Быстрая и надежная доставка в течение 48 часов по всей стране.
                </p>
              </div>
              <div className="bg-wood-50 p-8 rounded-xl">
                <Heart className="text-fire-600 mb-4" size={40} />
                <h3 className="text-2xl font-semibold text-wood-900 mb-3">Забота</h3>
                <p className="text-wood-700">
                  Мы заботимся о вашем комфорте и всегда готовы помочь.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

