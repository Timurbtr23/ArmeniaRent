import { useState } from 'react'
import PrivacyPolicyModal from './PrivacyPolicyModal'

function scrollToId(id) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
}

const navLinks = [
  { label: 'Автопарк', section: 'pricing' },
  { label: 'Как работаем', section: 'process' },
  { label: 'Условия', section: 'terms' },
  { label: 'Гарантии', section: 'guarantees' },
  { label: 'Отзывы', section: 'testimonials' },
  { label: 'FAQ', section: 'faq' },
  { label: 'Контакты', section: 'contact' },
]

export default function Footer() {
  const [privacyModalOpen, setPrivacyModalOpen] = useState(false)

  return (
    <footer className="bg-zinc-950 text-white pt-16 pb-8 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-12">
          <div>
            <p className="font-display text-xl font-bold text-white mb-3">Прокат авто в Армении</p>
            <p className="text-sm text-white/60 leading-relaxed">Аренда без сюрпризов — от звонка до возврата ключей</p>
          </div>
          <div>
            <p className="text-sm font-semibold text-white mb-4 uppercase tracking-wider">Навигация</p>
            <div className="grid grid-cols-2 gap-x-4 gap-y-2">
              {navLinks.map((link) => (
                <a
                  key={link.section}
                  href={`#${link.section}`}
                  onClick={(e) => { e.preventDefault(); scrollToId(link.section) }}
                  className="text-sm text-white/60 hover:text-white transition-colors duration-200"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
          <div>
            <p className="text-sm font-semibold text-white mb-4 uppercase tracking-wider">Контакты</p>
            <ul className="flex flex-col gap-3">
              <li><span className="text-sm text-white/60">0001, Tumanyan 21, Yerevan, Armenia</span></li>
              <li><span className="text-sm text-white/60">rentcararm17@gmail.com</span></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-white/40 order-2 md:order-1">© 2026 Rent a car . Все права защищены.</p>
          <div className="flex flex-wrap justify-center gap-6 order-1 md:order-2">
            <button onClick={() => setPrivacyModalOpen(true)} className="text-sm text-white/40 hover:text-white/60 transition-colors">Политика конфиденциальности</button>
          </div>
        </div>
        <PrivacyPolicyModal isOpen={privacyModalOpen} onClose={() => setPrivacyModalOpen(false)} />
      </div>
    </footer>
  )
}