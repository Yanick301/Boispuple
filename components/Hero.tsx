'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Flame, ArrowRight } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-wood-900 via-wood-800 to-fire-900">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex justify-center mb-6">
              <div className="bg-fire-500/20 backdrop-blur-sm rounded-full p-4">
                <Flame size={64} className="text-fire-400" />
              </div>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-serif font-bold text-white mb-6 leading-tight">
              Тепло и уют
              <br />
              <span className="text-fire-400">в каждом доме</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-wood-200 mb-8 max-w-2xl mx-auto">
              Премиальные дрова для отопления, пеллеты и печи высочайшего качества. 
              Доставка по всей России. Заботимся о вашем комфорте.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/products" className="btn-primary text-lg px-8 py-4 inline-flex items-center gap-2">
                Каталог товаров
                <ArrowRight size={20} />
              </Link>
              <Link href="/about" className="btn-outline text-lg px-8 py-4 border-white text-white hover:bg-white hover:text-wood-900">
                О компании
              </Link>
            </div>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="grid grid-cols-3 gap-8 mt-16 pt-8 border-t border-white/20"
          >
            <div>
              <div className="text-4xl font-bold text-fire-400 mb-2">10+</div>
              <div className="text-wood-200">Лет опыта</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-fire-400 mb-2">50K+</div>
              <div className="text-wood-200">Довольных клиентов</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-fire-400 mb-2">24/7</div>
              <div className="text-wood-200">Доставка</div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  )
}

