import { Star } from 'lucide-react'

const items = [
  { name: 'Алексей', role: 'Турист из Москвы, аренда на 8 дней', text: 'Боялся, что на месте цена вырастет. Получил расчёт в WhatsApp до вылета — ровно столько и заплатил. Машину встретили в аэропорту, осмотр за 15 минут. На возврате — те же фото, сравнили, завершили за 10 минут. Второй раз уже бронирую у них.', rating: 5 },
  { name: 'Марина и Дмитрий', role: 'Семейная пара из Петербурга, 12 дней по регионам', text: 'Взяли кроссовер на Севан и Дилижан. Ребята подсказали, какие дороги подходят для нашей машины, и скинули карту с точками. Машина была чистая, всё работало. При возврате — ноль вопросов, 10 минут и свободны.', rating: 5 },
  { name: 'Игорь', role: 'Командировка на месяц, D-класс седан', text: 'Арендовал на 30 дней, получил скидку 27%. Один раз загорелся датчик — написал менеджеру, через час приехали и решили вопрос. Возврат прошёл быстро и без вопросов. Рекомендую коллегам.', rating: 5 },
]

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-16 sm:py-20 md:py-24 bg-zinc-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 sm:mb-14">
          <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-zinc-900 leading-tight max-w-3xl mx-auto">3 истории клиентов, которые боялись «сюрпризов»</h2>
          <p className="mt-4 text-base sm:text-lg text-zinc-500 leading-relaxed max-w-2xl mx-auto">Реальные отзывы о том, как прошла аренда.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {items.map((item, i) => (
            <div key={i} className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm hover:shadow-md transition-shadow duration-200 border border-zinc-100">
              <div className="flex gap-1 mb-4">
                {Array.from({ length: item.rating }).map((_, j) => (
                  <Star key={j} size={18} className="text-amber-400 fill-amber-400" />
                ))}
              </div>
              <p className="text-sm sm:text-base text-zinc-600 leading-relaxed mb-6">{item.text}</p>
              <div className="border-t border-zinc-100 pt-4">
                <p className="font-display text-base font-semibold text-zinc-900">{item.name}</p>
                <p className="text-xs text-zinc-400 mt-0.5">{item.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}