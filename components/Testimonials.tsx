'use client'

import { motion } from 'framer-motion'
import { Star, Quote } from 'lucide-react'

const testimonials = [
  {
    name: 'Иван Петров',
    location: 'Москва',
    rating: 5,
    text: 'Отличное качество дров! Заказываю уже третий год подряд. Всегда сухие, хорошо колотые. Доставка быстрая, персонал вежливый.',
    image: '/api/placeholder/100/100',
  },
  {
    name: 'Мария Сидорова',
    location: 'Санкт-Петербург',
    rating: 5,
    text: 'Очень довольна покупкой пеллет. Топят отлично, зольность минимальная. Рекомендую всем!',
    image: '/api/placeholder/100/100',
  },
  {
    name: 'Алексей Козлов',
    location: 'Казань',
    rating: 5,
    text: 'Купил печь через этот сайт. Установили быстро, все объяснили. Теперь дом всегда теплый. Спасибо!',
    image: '/api/placeholder/100/100',
  },
]

export default function Testimonials() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="section-title">Отзывы клиентов</h2>
          <p className="section-subtitle">
            Что говорят о нас наши довольные клиенты
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="card p-6 relative"
            >
              <Quote className="absolute top-4 right-4 text-fire-200" size={40} />
              <div className="flex items-center gap-2 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    size={18}
                    className="text-fire-500 fill-fire-500"
                  />
                ))}
              </div>
              <p className="text-wood-700 mb-6 relative z-10">{testimonial.text}</p>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-fire-400 to-fire-600 flex items-center justify-center text-white font-bold">
                  {testimonial.name[0]}
                </div>
                <div>
                  <div className="font-semibold text-wood-900">{testimonial.name}</div>
                  <div className="text-sm text-wood-600">{testimonial.location}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

