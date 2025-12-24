import Link from 'next/link'
import { Phone, Mail, MapPin, Facebook, Instagram, Twitter } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-wood-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-fire-600 text-white p-2 rounded-lg">
                <span className="text-xl font-bold">ДП</span>
              </div>
              <h3 className="text-xl font-serif font-bold">ДРОВА ПРЕМИУМ</h3>
            </div>
            <p className="text-wood-300 mb-4">
              Качественные дрова для отопления с доставкой по всей России. 
              Премиальное качество, доступные цены.
            </p>
            <div className="flex gap-4">
              <a href="#" className="hover:text-fire-400 transition">
                <Facebook size={20} />
              </a>
              <a href="#" className="hover:text-fire-400 transition">
                <Instagram size={20} />
              </a>
              <a href="#" className="hover:text-fire-400 transition">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Контакты</h4>
            <ul className="space-y-3 text-wood-300">
              <li className="flex items-center gap-2">
                <MapPin size={18} className="text-fire-400" />
                <span>Москва, ул. Лесная, д. 15</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={18} className="text-fire-400" />
                <a href="tel:+79991234567" className="hover:text-fire-400 transition">
                  +7 (999) 123-45-67
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={18} className="text-fire-400" />
                <a href="mailto:info@drovapremium.ru" className="hover:text-fire-400 transition">
                  info@drovapremium.ru
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Наши услуги</h4>
            <ul className="space-y-2 text-wood-300">
              <li>
                <Link href="/delivery" className="hover:text-fire-400 transition">
                  Доставка дров
                </Link>
              </li>
              <li>
                <Link href="/payment" className="hover:text-fire-400 transition">
                  Способы оплаты
                </Link>
              </li>
              <li>
                <Link href="/warranty" className="hover:text-fire-400 transition">
                  Гарантия качества
                </Link>
              </li>
              <li>
                <Link href="/wholesale" className="hover:text-fire-400 transition">
                  Оптовые поставки
                </Link>
              </li>
            </ul>
          </div>

          {/* Policies */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Информация</h4>
            <ul className="space-y-2 text-wood-300">
              <li>
                <Link href="/about" className="hover:text-fire-400 transition">
                  О компании
                </Link>
              </li>
              <li>
                <Link href="/faq" className="hover:text-fire-400 transition">
                  Частые вопросы
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="hover:text-fire-400 transition">
                  Политика конфиденциальности
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-fire-400 transition">
                  Условия использования
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-wood-800 mt-8 pt-8 text-center text-wood-400 text-sm">
          <p>&copy; 2025 ДРОВА ПРЕМИУМ. Все права защищены.</p>
        </div>
      </div>
    </footer>
  )
}

