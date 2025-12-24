'use client'

import { motion } from 'framer-motion'
import { Award, Truck, HeadphonesIcon, Shield } from 'lucide-react'

const features = [
  {
    icon: Award,
    title: 'Лучшее качество',
    description: 'Наши дрова проходят строгий контроль качества',
  },
  {
    icon: Truck,
    title: 'Быстрая доставка',
    description: 'Доставка в течение 48 часов по всей России',
  },
  {
    icon: HeadphonesIcon,
    title: 'Поддержка 24/7',
    description: 'Свяжитесь с нами в любое время суток',
  },
  {
    icon: Shield,
    title: 'Гарантия качества',
    description: '100% гарантия на всю нашу продукцию',
  },
]

export default function Features() {
  return (
    <section className="py-20 bg-wood-900 text-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">
            Почему выбирают нас
          </h2>
          <p className="text-lg text-wood-300 max-w-2xl mx-auto">
            Мы заботимся о вашем комфорте и предлагаем только лучшее
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="bg-fire-600/20 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                  <Icon size={40} className="text-fire-400" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-wood-300">{feature.description}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

