import { Check } from 'lucide-react'

const items = [
  'Автомобиль выбранного класса (D-класс седан, кроссовер или премиум) — подбираем под маршрут и количество пассажиров',
  'Подготовка авто к выдаче — мойка кузова, чистка салона, проверка технического состояния',
  'Осмотр с фотофиксацией при выдаче — фото кузова и салона отправляем вам в чат',
  'Осмотр с фотофиксацией при возврате — те же фото, сравнение с выдачей, акт подписываем вместе',
  'Доставка в аэропорт Звартноц или выдача в офисе в центре Еревана',
  'Консультация по маршрутам и дорогам Армении — Севан, Дилижан, Татев и др.',
  'Поддержка в WhatsApp/Telegram на весь период аренды — отвечаем в течение 10 минут',
  'Скидка при длительной аренде — чем дольше срок, тем ниже цена за сутки (до 40% экономии)',
]

export default function WhatIncluded() {
  return (
    <section id="what-included" className="py-16 sm:py-20 md:py-24 bg-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-10 sm:mb-14">
          <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-zinc-50 leading-tight">В стоимость аренды входят 8 позиций — без скрытых строк и доплат</h2>
          <p className="mt-4 text-base sm:text-lg text-zinc-400 leading-relaxed max-w-2xl">Всё, что перечислено ниже, включено в сумму, которую мы фиксируем до вашего приезда.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {items.map((item, i) => (
            <div key={i} className="flex items-start gap-3 bg-zinc-800 rounded-xl p-5">
              <div className="w-6 h-6 rounded-full bg-zinc-8000 flex items-center justify-center flex-shrink-0 mt-0.5">
                <Check className="w-3.5 h-3.5 text-white" />
              </div>
              <p className="text-sm sm:text-base text-zinc-300 leading-relaxed">{item}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}