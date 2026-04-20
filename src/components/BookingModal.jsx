import { useState } from 'react'
import { X } from 'lucide-react'
import PrivacyPolicyModal from './PrivacyPolicyModal'

export default function BookingModal({ car, onClose, onSuccess }) {
  const [privacyChecked, setPrivacyChecked] = useState(false)
  const [privacyModalOpen, setPrivacyModalOpen] = useState(false)
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')

  if (!car) return null

  const carName = `${car.make} ${car.model}${car.year ? ` ${car.year}` : ''}`
  const canSubmit = privacyChecked && name.trim() && phone.trim()

  const handleSubmit = async (e) => {
    e.preventDefault()
    await fetch('/api/send-booking', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, phone, car: carName, message: e.target.message?.value })
    })
    onClose()
    onSuccess()
  }

  return (
    <>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm" onClick={onClose}>
        <div
          className="bg-zinc-900 rounded-3xl border border-white/10 shadow-2xl w-full max-w-md max-h-[90vh] overflow-y-auto"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="sticky top-0 bg-zinc-900 border-b border-white/10 px-6 py-4 flex items-center justify-between rounded-t-3xl">
            <h2 className="text-lg font-bold text-white font-display">Забронировать автомобиль</h2>
            <button onClick={onClose} className="p-2 hover:bg-white/10 rounded-lg transition-colors" aria-label="Закрыть">
              <X className="w-5 h-5 text-white" />
            </button>
          </div>

          <form
              onSubmit={handleSubmit}
              className="flex flex-col gap-5 p-6"
            >
              <div>
                <label className="block text-sm font-medium text-zinc-300 mb-1.5">
                  Ваше имя<span className="text-accent-500 ml-1">*</span>
                </label>
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
                <label className="block text-sm font-medium text-zinc-300 mb-1.5">
                  Телефон или Telegram<span className="text-accent-500 ml-1">*</span>
                </label>
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
                <label className="block text-sm font-medium text-zinc-300 mb-1.5">Выбранный автомобиль</label>
                <input
                  type="text"
                  name="car"
                  value={carName}
                  readOnly
                  className="w-full min-h-[44px] px-4 py-3 rounded-xl border border-white/10 bg-zinc-800/50 text-zinc-300 cursor-default"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-zinc-300 mb-1.5">Дата поездки и пожелания</label>
                <textarea
                  name="message"
                  placeholder="10–18 мая, выдача в аэропорту, нужно детское кресло"
                  rows={3}
                  className="w-full px-4 py-3 rounded-xl border border-white/10 bg-zinc-950/50 text-zinc-50 placeholder-zinc-600 focus:outline-none focus:ring-2 focus:ring-accent-500/50 focus:border-accent-500 transition-all resize-none"
                />
              </div>

              <div className="flex items-start gap-3">
                <input
                  type="checkbox"
                  id="booking-privacy"
                  checked={privacyChecked}
                  onChange={(e) => setPrivacyChecked(e.target.checked)}
                  className="mt-1 w-4 h-4 rounded border-white/10 bg-zinc-950 text-accent-500 focus:ring-accent-500/50 transition-all cursor-pointer"
                />
                <label htmlFor="booking-privacy" className="text-xs text-zinc-500 leading-snug cursor-pointer hover:text-zinc-400 transition-colors">
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
                    ? 'bg-accent-500 hover:bg-accent-400 text-zinc-950 hover:scale-[1.02] active:scale-[0.98] shadow-[0_0_20px_rgba(6,182,212,0.3)] cursor-pointer'
                    : 'bg-zinc-700 text-zinc-500 cursor-not-allowed opacity-50'
                }`}
              >
                Оставить заявку
              </button>
            </form>
        </div>
      </div>

      <PrivacyPolicyModal isOpen={privacyModalOpen} onClose={() => setPrivacyModalOpen(false)} />
    </>
  )
}
