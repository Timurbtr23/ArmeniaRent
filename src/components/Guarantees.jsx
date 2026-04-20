import { DollarSign, Car, Shield, Heart } from 'lucide-react'

function scrollToId(id) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
}

const guarantees = [
  { icon: DollarSign, title: 'Гарантия фиксированной цены', text: 'Сумма из расчёта в мессенджере = сумма в договоре. Если мы ошиблись в расчёте — разницу берём на себя. Пункт договора: «Итоговая стоимость аренды не подлежит изменению после подтверждения брони».' },
  { icon: Car, title: 'Гарантия состояния авто', text: 'Передаём автомобиль после 3 проверок с фотофиксацией. Если на выдаче вас не устраивает состояние — предлагаем замену того же класса без доплат или возвращаем 100% оплаты.' },
  { icon: Shield, title: 'Гарантия честного возврата', text: 'Удержания из залога — только при наличии фото «до» и «после» с подписанным актом. Без фотодоказательств не удерживаем ни драма. Паспорт/залог возвращаем в день сдачи.' },
  { icon: Heart, title: 'Страховка от компании', text: 'Оформляется дополнительно. Покрывает часть расходов при ДТП и повреждениях. Пример: «мелкая царапина на бампере = ваш расход 0 драм при полной страховке».' },
]

export default function Guarantees() {
  return (
    <section id="guarantees" className="py-16 sm:py-20 md:py-24 bg-brand-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 sm:mb-14">
          <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-white leading-tight">4 гарантии, зафиксированные в договоре</h2>
          <p className="mt-4 text-base sm:text-lg text-white/70 leading-relaxed max-w-2xl mx-auto">Не обещания на словах, а пункты договора с конкретными обязательствами.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {guarantees.map((g, i) => (
            <div key={i} className="bg-zinc-900/10 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
              <div className="w-11 h-11 rounded-xl bg-accent-500/20 flex items-center justify-center mb-4">
                <g.icon className="w-5 h-5 text-accent-400" />
              </div>
              <h3 className="font-display text-lg font-semibold text-white mb-2">{g.title}</h3>
              <p className="text-sm text-white/70 leading-relaxed">{g.text}</p>
            </div>
          ))}
        </div>
        <div className="mt-10 text-center">
          <button
            onClick={() => scrollToId('contact')}
            className="min-h-[48px] px-8 py-3 bg-accent-500 hover:bg-accent-600 text-white rounded-2xl text-lg font-semibold font-display transition-colors duration-200 hover:scale-[1.02] active:scale-[0.98]"
          >
            Узнать условия страховки
          </button>
        </div>
      </div>
    </section>
  )
}