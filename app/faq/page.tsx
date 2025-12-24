'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

const faqs = [
  {
    question: 'Какие породы дерева вы предлагаете?',
    answer: 'Мы предлагаем дрова из различных пород: дуб, береза, ольха, сосна. Каждая порода имеет свои особенности горения и подходит для разных целей.',
  },
  {
    question: 'Как быстро происходит доставка?',
    answer: 'Доставка осуществляется в течение 48 часов после оформления заказа. В некоторых регионах возможна доставка в день заказа.',
  },
  {
    question: 'Какие способы оплаты доступны?',
    answer: 'Мы принимаем оплату наличными при доставке, банковскими картами онлайн, банковским переводом и через электронные платежные системы.',
  },
  {
    question: 'Гарантируете ли вы качество дров?',
    answer: 'Да, мы гарантируем качество всей нашей продукции. Все дрова проходят контроль влажности и качества перед отправкой.',
  },
  {
    question: 'Можно ли заказать дрова оптом?',
    answer: 'Да, мы работаем с оптовыми клиентами. Свяжитесь с нами для получения специальных условий и цен.',
  },
  {
    question: 'Как хранить дрова?',
    answer: 'Дрова следует хранить в сухом, хорошо проветриваемом месте, защищенном от дождя и снега. Идеально подходит навес или сарай.',
  },
  {
    question: 'Какая влажность у ваших дров?',
    answer: 'Мы предлагаем дрова с влажностью не более 20%, что обеспечивает оптимальное горение и высокую теплоотдачу.',
  },
  {
    question: 'Есть ли минимальная сумма заказа?',
    answer: 'Минимальная сумма заказа составляет 2000 рублей. При заказе на сумму свыше 10000 рублей доставка бесплатная.',
  },
]

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <div className="min-h-screen bg-wood-50 py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-wood-900 mb-4">
              Часто задаваемые вопросы
            </h1>
            <p className="text-lg text-wood-600">
              Найдите ответы на самые популярные вопросы
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-md overflow-hidden"
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-wood-50 transition"
                >
                  <span className="font-semibold text-wood-900 pr-4">
                    {faq.question}
                  </span>
                  <ChevronDown
                    size={20}
                    className={`text-wood-600 transition-transform flex-shrink-0 ${
                      openIndex === index ? 'transform rotate-180' : ''
                    }`}
                  />
                </button>
                {openIndex === index && (
                  <div className="px-6 pb-4 text-wood-700 leading-relaxed">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

