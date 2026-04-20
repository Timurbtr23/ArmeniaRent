import { AlertTriangle, CheckCircle2 } from 'lucide-react'

const items = [
  { fear: '«Цена на сайте одна, а на месте другая»', answer: 'Фиксируем итоговую сумму в мессенджере до приезда. Сумма в сообщении = сумма в договоре. Если что-то изменится — предупредим заранее' },
  { fear: '«Дали машину в плохом состоянии»', answer: 'Отправляем фото и видео до выдачи. На месте — совместный осмотр по чек-листу. Не устраивает — предложим замену' },
  { fear: '«На возврате нашли царапину, которой не было»', answer: 'Все дефекты фиксируем фото при выдаче и при возврате. Удержания — только при наличии фото «до/после» и подписанного акта. Без доказательств не удерживаем' },
  { fear: '«Рейс задержали, а в аэропорту никто не ждёт»', answer: 'Отслеживаем статус рейса. При задержке ждём без доплат и штрафов. Контакт встречающего — в вашем чате заранее' },
  { fear: '«Давят переводить деньги заранее — а вдруг обман?»', answer: 'Не просим предоплату. Оплата 100% при подписании договора в офисе, лично. До этого момента вы ничего не платите.' },
]

export default function Risks() {
  return (
    <section id="risks" className="py-16 sm:py-20 md:py-24 bg-zinc-950">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 sm:mb-14">
          <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-white leading-tight max-w-3xl mx-auto">
            5 ситуаций, из-за которых туристы теряют деньги и нервы
          </h2>
          <p className="mt-4 text-base sm:text-lg text-white/50 leading-relaxed max-w-2xl mx-auto">
            Мы знаем эти риски, потому что клиенты рассказывают о них при первом звонке.
          </p>
        </div>

        {/* 2x2 grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
          {items.slice(0, 4).map((item, i) => (
            <div key={i} className="group relative bg-zinc-900 border border-zinc-700/50 rounded-3xl p-6 hover:border-accent-500/40 hover:shadow-[0_0_20px_rgba(6,182,212,0.1)] transition-all duration-300">
              <div className="flex items-start gap-3 mb-3">
                <div className="w-9 h-9 rounded-xl bg-red-500/10 border border-red-500/20 flex items-center justify-center flex-shrink-0">
                  <AlertTriangle className="w-4 h-4 text-red-400" />
                </div>
                <p className="font-display text-sm sm:text-base font-semibold text-white leading-snug pt-1">
                  {item.fear}
                </p>
              </div>
              <div className="flex items-start gap-2 ml-0">
                <CheckCircle2 className="w-4 h-4 text-accent-400 flex-shrink-0 mt-0.5" />
                <p className="text-sm text-zinc-400 leading-relaxed">
                  {item.answer}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* 5-й блок — полная ширина */}
        <div className="group relative bg-zinc-900 border border-zinc-700/50 rounded-3xl p-6 hover:border-accent-500/40 hover:shadow-[0_0_20px_rgba(6,182,212,0.1)] transition-all duration-300">
          <div className="flex items-start gap-3 mb-3">
            <div className="w-9 h-9 rounded-xl bg-red-500/10 border border-red-500/20 flex items-center justify-center flex-shrink-0">
              <AlertTriangle className="w-4 h-4 text-red-400" />
            </div>
            <p className="font-display text-sm sm:text-base font-semibold text-white leading-snug pt-1">
              {items[4].fear}
            </p>
          </div>
          <div className="flex items-start gap-2">
            <CheckCircle2 className="w-4 h-4 text-accent-400 flex-shrink-0 mt-0.5" />
            <p className="text-sm text-zinc-400 leading-relaxed">
              {items[4].answer}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}