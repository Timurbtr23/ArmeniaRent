import { useState, useEffect } from 'react'
import { Car, Shield, Camera, Percent, DollarSign } from 'lucide-react'

function scrollToId(id) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
}

const bullets = [
  { icon: Car, text: 'Цена фиксируется в сообщении: аренда + страховка' },
  { icon: Shield, text: 'Выдача за 30 минут в центре Еревана или в аэропорту по прилёту' },
  { icon: Camera, text: 'Честный осмотр при выдаче и возврате — лишние споры исключены' },
  { icon: Percent, text: 'Скидки до 40% при длительной аренде' },
  { icon: DollarSign, text: 'Оплата в любой валюте: драмы, рубли, доллар, евро, крипта' },
]

export default function Hero() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <section id="hero" className="relative min-h-[90vh] flex items-center overflow-hidden bg-zinc-950">
      <div
        className="absolute inset-0 w-full h-full"
        style={{
          transform: `translateY(${scrollY * 0.2}px)`,
        }}
      >
        <img
          src="/images/hero.jpg"
          alt="Горная дорога Армении"
          className="absolute inset-0 w-full h-[105%] object-cover opacity-90"
          style={{ top: '-5%' }}
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-r from-zinc-950/50 via-zinc-950/30 to-transparent" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-32 pb-16 sm:pt-40 sm:pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-12 items-center">
          <div className="lg:col-span-3">
            <p className="text-xs sm:text-sm font-medium uppercase tracking-widest text-accent-400 mb-4">
              Прокат автомобилей в Ереване и по Армении · 30+ авто · С 2017 года
            </p>
            <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight tracking-tight">
              Аренда авто в Ереване без залога, скрытых платежей и проблем при возврате
            </h1>
            <p className="mt-5 text-base sm:text-lg text-white/80 max-w-xl leading-relaxed">
              Подберём автомобиль под ваши задачи и маршрут за 15 минут. Условия, страховку и фото конкретной машины пришлём в мессенджер — до вашего приезда.
            </p>
            <ul className="mt-6 flex flex-col gap-3">
              {bullets.map((b) => (
                <li key={b.text} className="flex items-start gap-3">
                  <b.icon className="w-5 h-5 text-accent-400 flex-shrink-0 mt-0.5" />
                  <span className="text-sm sm:text-base text-white/90">{b.text}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <button
                onClick={() => scrollToId('contact')}
                className="min-h-[52px] px-8 py-4 bg-accent-500 hover:bg-accent-400 text-zinc-950 rounded-2xl text-lg font-bold font-display shadow-[0_0_15px_rgba(6,182,212,0.3)] hover:shadow-[0_0_25px_rgba(6,182,212,0.5)] transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
              >
                Получить расчёт на даты
              </button>
              <button
                onClick={() => scrollToId('pricing')}
                className="min-h-[52px] px-8 py-4 border-2 border-white/20 text-white hover:bg-white/10 rounded-2xl text-lg font-semibold font-display transition-all duration-300 backdrop-blur-sm"
              >
                Посмотреть автопарк
              </button>
            </div>
            <p className="mt-4 text-sm text-white/60">Ответим в WhatsApp/Telegram за 15 минут — пришлём итоговую стоимость и фото авто</p>
          </div>
          <div className="lg:col-span-2 hidden lg:block">
            <div className="bg-zinc-900/10 backdrop-blur-md border border-white/20 rounded-3xl p-6 sm:p-8">
              <p className="text-xs font-semibold uppercase tracking-widest text-accent-400 mb-5">Быстрый расчёт</p>
              <div className="flex flex-col gap-4">
                <div className="flex justify-between items-center border-b border-white/10 pb-3">
                  <span className="text-sm text-white/70">Класс авто</span>
                  <span className="text-sm font-semibold text-white font-display">D-класс / Кроссовер</span>
                </div>
                <div className="flex justify-between items-center border-b border-white/10 pb-3">
                  <span className="text-sm text-white/70">Период</span>
                  <span className="text-sm font-semibold text-white font-display">3 дня</span>
                </div>
                <div className="flex justify-between items-center border-b border-white/10 pb-3">
                  <span className="text-sm text-white/70">Тариф</span>
                  <span className="text-sm font-semibold text-white font-display">27 000 драм/сутки</span>
                </div>
                <div className="flex flex-col pt-1 text-right">
                  <div className="flex justify-between items-end w-full">
                    <span className="text-base text-white font-semibold mb-1">Итого за 3 дня</span>
                    <span className="text-xl font-bold text-accent-400 font-display">81 000 драм</span>
                  </div>
                  <span className="text-sm font-medium text-white/60 font-display">≈17 000 рублей</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}