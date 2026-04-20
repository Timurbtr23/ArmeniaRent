import { Map, Plane, Users, Briefcase, Phone } from 'lucide-react'

const items = [
  { icon: Map, text: 'Пара или семья летит в Ереван на неделю — план: город + Севан + Дилижан + монастыри. Нужен кроссовер с нормальным багажником под 2 чемодана и понятная цена без «доплат на месте»' },
  { icon: Plane, text: 'Самостоятельный путешественник строит маршрут по YouTube-гайдам — хочет забрать машину в аэропорту сразу после прилёта и не тратить час на оформление' },
  { icon: Users, text: 'Компания друзей на 10 дней — нужны 2 машины разного класса, важно получить единый расчёт и одинаковые условия страховки на оба авто' },
  { icon: Briefcase, text: 'Командировка или релокация на месяц — нужен D-класс седан с долгосрочной скидкой и минимумом бумажной волокиты' },
  { icon: Phone, text: 'Уже в Ереване, увидели номер на крыше машины — хотят быстро узнать цену и забрать авто из офиса в центре в тот же день' },
]

export default function Audience() {
  return (
    <section id="audience" className="py-16 sm:py-20 md:py-24 bg-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-10 sm:mb-14">
          <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-zinc-50 leading-tight">4 из 5 наших клиентов — туристы из РФ, которым нужна машина на 5–14 дней</h2>
          <p className="mt-4 text-base sm:text-lg text-zinc-400 leading-relaxed max-w-2xl">Вот типичные сценарии, под которые мы подбираем авто и условия.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {items.map((item, i) => (
            <div key={i} className="group rounded-2xl bg-zinc-800 p-6 hover:bg-zinc-800 transition-colors duration-200">
              <div className="w-11 h-11 rounded-xl bg-zinc-8000/10 flex items-center justify-center mb-4">
                <item.icon className="w-5 h-5 text-brand-500" />
              </div>
              <p className="text-sm sm:text-base text-zinc-300 leading-relaxed">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}