import { MessageSquare, Camera, User, Bell } from 'lucide-react'

const items = [
  { icon: MessageSquare, title: 'Переписка как единый журнал', text: 'Расчёт, фото, договор, акт осмотра, контакт куратора. Всё в одном чате, ничего не теряется' },
  { icon: Camera, title: 'Фотофиксация «до/после»', text: '12+ фото при выдаче, 12+ при возврате. Вы можете сравнить сами и убедиться, что претензий нет' },
  { icon: User, title: 'Куратор на связи 24/7', text: 'Один человек ведёт вашу аренду от брони до возврата. Не нужно объяснять ситуацию разным операторам' },
  { icon: Bell, title: 'Статус возврата залога', text: 'После осмотра сообщаем в чат: «Осмотр пройден, паспорт/залог готов к возврату». Без задержек' },
]

export default function Transparency() {
  return (
    <section id="transparency" className="py-16 sm:py-20 md:py-24 bg-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 sm:mb-14">
          <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-zinc-50 leading-tight max-w-3xl mx-auto">Вы видите статус аренды в реальном времени</h2>
          <p className="mt-4 text-base sm:text-lg text-zinc-400 leading-relaxed max-w-2xl mx-auto">4 инструмента, которые убирают «чёрные ящики» из процесса.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {items.map((item, i) => (
            <div key={i} className="group flex items-start gap-4 rounded-2xl border border-zinc-700 bg-zinc-800 p-6 hover:border-brand-300 hover:bg-zinc-800 transition-all duration-200">
              <div className="w-11 h-11 rounded-xl bg-zinc-8000/10 flex items-center justify-center flex-shrink-0 group-hover:bg-zinc-8000/20 transition-colors duration-200">
                <item.icon className="w-5 h-5 text-brand-500" />
              </div>
              <div>
                <h3 className="font-display text-lg font-semibold text-zinc-50 mb-1">{item.title}</h3>
                <p className="text-sm text-zinc-400 leading-relaxed">{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}