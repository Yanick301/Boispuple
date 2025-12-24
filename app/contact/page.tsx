'use client'

import { useState } from 'react'
import { Phone, Mail, MapPin, Send } from 'lucide-react'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log('Form submitted:', formData)
    alert('Спасибо за ваше сообщение! Мы свяжемся с вами в ближайшее время.')
    setFormData({ name: '', email: '', phone: '', message: '' })
  }

  return (
    <div className="min-h-screen bg-wood-50 py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-wood-900 mb-4">
              Свяжитесь с нами
            </h1>
            <p className="text-lg text-wood-600">
              Мы всегда готовы ответить на ваши вопросы
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Contact Info */}
            <div className="space-y-6">
              <div className="bg-white rounded-xl shadow-lg p-8">
                <h2 className="text-2xl font-semibold text-wood-900 mb-6">
                  Контактная информация
                </h2>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-fire-100 p-3 rounded-lg">
                      <Phone className="text-fire-600" size={24} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-wood-900 mb-1">Телефон</h3>
                      <a href="tel:+79991234567" className="text-wood-600 hover:text-fire-600 transition">
                        +7 (999) 123-45-67
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="bg-fire-100 p-3 rounded-lg">
                      <Mail className="text-fire-600" size={24} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-wood-900 mb-1">Email</h3>
                      <a href="mailto:info@drovapremium.ru" className="text-wood-600 hover:text-fire-600 transition">
                        info@drovapremium.ru
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="bg-fire-100 p-3 rounded-lg">
                      <MapPin className="text-fire-600" size={24} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-wood-900 mb-1">Адрес</h3>
                      <p className="text-wood-600">
                        Москва, ул. Лесная, д. 15
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-fire-600 to-fire-800 text-white rounded-xl shadow-lg p-8">
                <h3 className="text-xl font-semibold mb-4">Режим работы</h3>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span>Понедельник - Пятница</span>
                    <span className="font-semibold">9:00 - 20:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Суббота</span>
                    <span className="font-semibold">10:00 - 18:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Воскресенье</span>
                    <span className="font-semibold">10:00 - 16:00</span>
                  </div>
                </div>
                <div className="mt-6 pt-6 border-t border-white/20">
                  <p className="text-fire-100">
                    Доставка осуществляется 24/7
                  </p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-semibold text-wood-900 mb-6">
                Отправить сообщение
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-wood-700 mb-2">
                    Имя
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    className="w-full px-4 py-3 border border-wood-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-fire-500"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-wood-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    className="w-full px-4 py-3 border border-wood-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-fire-500"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-wood-700 mb-2">
                    Телефон
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 border border-wood-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-fire-500"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-wood-700 mb-2">
                    Сообщение
                  </label>
                  <textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                    rows={5}
                    className="w-full px-4 py-3 border border-wood-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-fire-500"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full btn-primary flex items-center justify-center gap-2"
                >
                  <Send size={20} />
                  Отправить сообщение
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

