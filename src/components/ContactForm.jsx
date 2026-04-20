import { useState } from 'react'
import { Mail, MapPin, CheckCircle } from 'lucide-react'
import PrivacyPolicyModal from './PrivacyPolicyModal'
import SuccessToast from './SuccessToast'

export default function ContactForm() {
  const [privacyModalOpen, setPrivacyModalOpen] = useState(false)
  const [privacyChecked, setPrivacyChecked] = useState(false)
  const [showToast, setShowToast] = useState(false)
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')

  const canSubmit = privacyChecked && name.trim() && phone.trim()

  return (
    <section id="contact" className="relative py-16 sm:py-20 md:py-24 bg-zinc-950 overflow-hidden">
      {/* Фоновое фото */}
      <div className="absolute inset-0">
        <img src="/images/antihero.jpg" alt="" className="w-full h-full object-cover opacity-70" loading="lazy" decoding="async" />
        <div className="absolute inset-0 bg-gradient-to-b from-zinc-950/20 via-zinc-950/40 to-zinc-950/10" />
        <div className="absolute inset-y-0 right-0 w-1/2 bg-gradient-to-l from-zinc-950/80 to-transparent" />
      </div>
      {/* Декоративные свечения (Сyber-Premium) */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-accent-600/10 rounded-full blur-[120px] pointer-events-none mix-blend-screen" />
      <div className="absolute bottom-[-10%] right-[-5%] w-[600px] h-[600px] bg-sky-600/10 rounded-full blur-[150px] pointer-events-none mix-blend-screen" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto items-start">
          <div className="order-2 lg:order-1">
            <form
              data-form-id="contact"
              onSubmit={async (e) => {
                e.preventDefault()
                await fetch('/api/send-booking', {
                  method: 'POST',
                  headers: { 'Content-Type': 'application/json' },
                  body: JSON.stringify({ name, phone, message: e.target.message?.value })
                })
                setShowToast(true)
              }}
              className="relative flex flex-col gap-5 bg-zinc-900/60 backdrop-blur-xl rounded-3xl p-6 sm:p-8 border border-white/10 shadow-[0_0_40px_rgba(6,182,212,0.05)]"
            >
              <div>
                <label className="block text-sm font-medium text-zinc-300 mb-1.5">Ваше имя<span className="text-accent-500 ml-1">*</span></label>
                <input
                  type="text"
                  name="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Илья"
                  required
                  className="w-full min-h-[44px] px-4 py-3 rounded-xl border border-white/10 bg-zinc-950/50 text-zinc-50 placeholder-zinc-600 focus:outline-none focus:ring-2 focus:ring-accent-500/50 focus:border-accent-500 transition-all"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-zinc-300 mb-1.5">Телефон или Telegram<span className="text-accent-500 ml-1">*</span></label>
                <input
                  type="tel"
                  name="phone"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="+7 900 123-45-67"
                  required
                  className="w-full min-h-[44px] px-4 py-3 rounded-xl border border-white/10 bg-zinc-950/50 text-zinc-50 placeholder-zinc-600 focus:outline-none focus:ring-2 focus:ring-accent-500/50 focus:border-accent-500 transition-all"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-zinc-300 mb-1.5">Даты, автомобиль и пожелания</label>
                <textarea
                  name="message"
                  placeholder="10–18 мая, кроссовер, выдача в аэропорту"
                  rows={4}
                  className="w-full px-4 py-3 rounded-xl border border-white/10 bg-zinc-950/50 text-zinc-50 placeholder-zinc-600 focus:outline-none focus:ring-2 focus:ring-accent-500/50 focus:border-accent-500 transition-all resize-none"
                />
              </div>
              <div className="flex items-start gap-3 my-2">
                <input
                  type="checkbox"
                  id="privacy"
                  checked={privacyChecked}
                  onChange={(e) => setPrivacyChecked(e.target.checked)}
                  className="mt-1 w-4 h-4 rounded border-white/10 bg-zinc-950 text-accent-500 focus:ring-accent-500/50 transition-all cursor-pointer"
                />
                <label htmlFor="privacy" className="text-xs text-zinc-500 leading-snug cursor-pointer hover:text-zinc-400 transition-colors">
                  Я согласен(а) на обработку персональных данных в соответствии с{' '}
                  <button
                    type="button"
                    onClick={(e) => { e.preventDefault(); setPrivacyModalOpen(true) }}
                    className="underline underline-offset-2 hover:text-accent-400"
                  >
                    Политикой конфиденциальности
                  </button>
                </label>
              </div>
              <button
                type="submit"
                disabled={!canSubmit}
                className={`min-h-[52px] w-full px-8 py-3 rounded-2xl text-lg font-bold font-display transition-all duration-200 ${
                  canSubmit
                    ? 'bg-accent-500 hover:bg-accent-400 text-zinc-950 hover:scale-[1.02] active:scale-[0.98] shadow-[0_0_20px_rgba(6,182,212,0.3)] hover:shadow-[0_0_30px_rgba(6,182,212,0.5)] cursor-pointer'
                    : 'bg-zinc-700 text-zinc-500 cursor-not-allowed opacity-50'
                }`}
              >
                Получить расчёт
              </button>
              <p className="text-sm text-zinc-500 text-center">Не просим предоплату. Расчёт и фото авто — бесплатно.</p>
            </form>
          </div>
          <div className="flex flex-col gap-8 justify-center order-1 lg:order-2">
            <div>
              <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-zinc-50 leading-tight">
                Получите расчёт и фото авто на ваши даты — за 15 минут в мессенджер
              </h2>
              <p className="mt-4 text-base sm:text-lg text-zinc-400 leading-relaxed">
                Напишите даты и автомобиль — пришлём итоговую сумму, фото конкретной машины и условия страховки в одном сообщении.
              </p>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-accent-500/10 flex items-center justify-center flex-shrink-0 border border-accent-500/20 shadow-[0_0_15px_rgba(6,182,212,0.1)]">
                <Mail className="w-5 h-5 text-accent-400" />
              </div>
              <div>
                <p className="text-sm font-semibold text-zinc-50 mb-0.5">Email</p>
                <p className="text-zinc-400">rentcararm17@gmail.com</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-accent-500/10 flex items-center justify-center flex-shrink-0 border border-accent-500/20 shadow-[0_0_15px_rgba(6,182,212,0.1)]">
                <MapPin className="w-5 h-5 text-accent-400" />
              </div>
              <div>
                <p className="text-sm font-semibold text-zinc-50 mb-0.5">Адрес</p>
                <p className="text-zinc-400">0001, Tumanyan 21, Yerevan, Armenia</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <PrivacyPolicyModal isOpen={privacyModalOpen} onClose={() => setPrivacyModalOpen(false)} />
      <SuccessToast isOpen={showToast} onClose={() => setShowToast(false)} />
    </section>
  )
}