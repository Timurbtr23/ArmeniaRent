import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

const items = [
  {
    question: '«А если на возврате найдут царапину, которой не было?»',
    answer: 'Фиксируем все дефекты на фото при выдаче и при возврате. Удержания — только при наличии фото «до/после» и подписанного акта. Без доказательств — ни драма с вас не попросим.',
  },
  {
    question: '«Какая будет итоговая сумма с учётом страховки?»',
    answer: 'Присылаем расчёт одной строкой до приезда: аренда × дни + страховка. Сумма в сообщении = сумма в договоре. Доплат «по факту» нет.',
  },
  {
    question: '«Если рейс задержат — вы подождёте?»',
    answer: 'Отслеживаем статус рейса. При задержке ждём без доплат. Контакт встречающего — в вашем чате заранее. Если задержка больше 3 часов — перенесём выдачу на удобное время.',
  },
  {
    question: '«А если машина сломается в дороге?»',
    answer: 'Куратор на связи 24/7. При технической неисправности организуем помощь или замену авто. Спорные и гарантийные случаи доводим до решения — не бросаем клиента.',
  },
  {
    question: '«Давят переводить деньги заранее — а вдруг обман?»',
    answer: 'Не просим предоплату. Оплата 100% при подписании договора в офисе, лично. До этого момента вы ничего не платите.',
  },
]

export default function Objections() {
  const [open, setOpen] = useState(null)

  return (
    <section id="objections" className="py-16 sm:py-20 md:py-24 bg-zinc-800">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 sm:mb-14">
          <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-zinc-50 leading-tight">
            5 страхов, которые останавливают 80% туристов
          </h2>
          <p className="mt-4 text-base sm:text-lg text-zinc-400 leading-relaxed max-w-2xl mx-auto">
            Мы слышим эти вопросы каждый день. Вот честные ответы.
          </p>
        </div>
        <div className="flex flex-col gap-3">
          {items.map((item, i) => (
            <div key={i} className={`rounded-2xl overflow-hidden transition-all duration-300 bg-zinc-900 border ${open === i ? 'border-accent-500/60 shadow-[0_0_20px_rgba(6,182,212,0.15)]' : 'border-zinc-700/50 hover:border-accent-500/40 hover:shadow-[0_0_15px_rgba(6,182,212,0.1)]'}`}>
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="min-h-[52px] w-full flex items-center justify-between gap-4 px-5 py-4 text-left font-display font-semibold text-zinc-50 hover:text-accent-400 transition-colors duration-200"
              >
                <span className="text-sm sm:text-base">{item.question}</span>
                <ChevronDown
                  className={`flex-shrink-0 w-5 h-5 text-accent-400 transition-transform duration-200 ${open === i ? 'rotate-180' : ''}`}
                />
              </button>
              {open === i && (
                <div className="px-5 pb-5 text-sm sm:text-base text-zinc-400 leading-relaxed border-t border-accent-500/20 pt-4">
                  {item.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}