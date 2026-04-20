import { DollarSign, CreditCard, FileText, Shield, CalendarClock } from 'lucide-react'

const items = [
  { icon: DollarSign, title: 'Цена фиксируется до выдачи', text: 'Сумма из расчёта в мессенджере = сумма в договоре. Доплат «по факту» нет' },
  { icon: CreditCard, title: 'Оплата 100% при подписании', text: 'Не просим переводить деньги заранее, не давим «иначе не держим бронь»' },
  { icon: Shield, title: 'Страховка от компании', text: 'Оформляется дополнительно. Условия и франшизу объясняем до подписания, с примерами сценариев' },
  { icon: CalendarClock, title: 'Изменение сроков', text: 'Хотите продлить — предупредите за 24 часа. Пересчитаем по тарифу вашего периода без штрафов' },
]

export default function Terms() {
  return (
    <section id="terms" className="py-16 sm:py-20 md:py-24 bg-zinc-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 sm:mb-14">
          <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-zinc-50 leading-tight">4 условия, которые мы фиксируем в договоре</h2>
          <p className="mt-4 text-base sm:text-lg text-zinc-400 leading-relaxed max-w-2xl mx-auto">Каждое условие проговариваем до приезда и закрепляем письменно.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 max-w-3xl mx-auto">
          {items.map((item, i) => (
            <div key={i} className="bg-zinc-900 rounded-2xl p-6 hover:shadow-md hover:-translate-y-1 transition-all duration-200">
              <div className="w-11 h-11 rounded-xl bg-accent-500/10 flex items-center justify-center mb-4">
                <item.icon className="w-5 h-5 text-accent-500" />
              </div>
              <h3 className="font-display text-lg font-semibold text-zinc-50 mb-2">{item.title}</h3>
              <p className="text-sm text-zinc-400 leading-relaxed">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}