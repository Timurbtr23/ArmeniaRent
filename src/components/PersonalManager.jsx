import { Clock, ShieldCheck, Map, Wrench, Navigation } from 'lucide-react'

const items = [
  { icon: ShieldCheck, title: 'Личная ответственность', text: 'За качество каждого авто и ваш комфорт отвечаю лично я (директор) или ведущий менеджер. Вы всегда знаете, к кому обратиться.' },
  { icon: Clock, title: 'Доступность 24/7', text: 'Мы понимаем, что в путешествии помощь может понадобиться и в 3 часа ночи. Наш рабочий номер доступен всегда — без выходных и праздников.' },
  { icon: Map, title: 'Помощь в пути', text: 'Если дорога, например, на Татев заблокирована или изменился прогноз погоды, мы предупредим вас заранее и поможем скорректировать планы.' },
  { icon: Wrench, title: 'Мгновенный сервис', text: 'Прокол колеса или вопрос по датчикам — наша забота. Мы координируем сервис или замену авто так, чтобы вы не теряли ни минуты отпуска.' },
  { icon: Navigation, title: 'Армения глазами друзей', text: 'Мы не даем советов по скрипту. Посоветуем проверенные винодельни, уютные гостевые дома и секретные точки, которых нет в путеводителях.' },
]

export default function PersonalManager() {
  return (
    <section id="personal-manager" className="py-16 sm:py-20 md:py-24 bg-zinc-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-10 sm:mb-14">
          <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-zinc-50 leading-tight">Прямой сервис и личный контроль</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          {items.map((item, i) => (
            <div key={i} className="flex items-start gap-4 bg-zinc-900 rounded-2xl p-5 hover:shadow-sm transition-shadow duration-200 border border-zinc-800 hover:border-zinc-700">
              <div className="w-10 h-10 rounded-xl bg-accent-500/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                <item.icon className="w-5 h-5 text-accent-500" />
              </div>
              <p className="text-sm sm:text-base text-zinc-300 leading-relaxed">
                <strong className="text-zinc-50 mr-2">{item.title}.</strong>
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}