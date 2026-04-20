import { Headphones, Wrench, MessageCircle, ClipboardCheck } from 'lucide-react'

const members = [
  { icon: Headphones, name: 'Менеджер по бронированию', role: 'Первый контакт', bio: 'Отвечает за 10 минут, подбирает авто под маршрут, фиксирует расчёт и условия в мессенджере' },
  { icon: Wrench, name: 'Технический специалист', role: 'Подготовка авто', bio: 'Проводит 3 проверки перед каждой выдачей, делает фото/видео для клиента, контролирует чистоту и исправность' },
  { icon: MessageCircle, name: 'Куратор аренды', role: 'Поддержка 24/7', bio: 'Ведёт клиента от выдачи до возврата, решает вопросы в дороге, координирует экстренные ситуации' },
  { icon: ClipboardCheck, name: 'Специалист по возврату', role: 'Приёмка авто', bio: 'Проводит осмотр по чек-листу из 18 пунктов, сравнивает фото «до/после», оформляет возврат залога/паспорта' },
]

export default function Team() {
  return (
    <section id="team" className="py-16 sm:py-20 md:py-24 bg-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 sm:mb-14">
          <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-zinc-50 leading-tight max-w-3xl mx-auto">За каждой арендой — команда из 4 человек</h2>
          <p className="mt-4 text-base sm:text-lg text-zinc-400 leading-relaxed max-w-2xl mx-auto">Кто именно работает с вашим заказом.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {members.map((m, i) => (
            <div key={i} className="group text-center rounded-2xl bg-zinc-800 p-6 hover:bg-zinc-800 transition-colors duration-200">
              <div className="w-14 h-14 rounded-2xl bg-zinc-8000/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-zinc-8000/20 transition-colors duration-200">
                <m.icon className="w-6 h-6 text-brand-500" />
              </div>
              <h3 className="font-display text-base font-semibold text-zinc-50 mb-0.5">{m.name}</h3>
              <p className="text-xs font-medium uppercase tracking-widest text-accent-500 mb-3">{m.role}</p>
              <p className="text-sm text-zinc-400 leading-relaxed">{m.bio}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}