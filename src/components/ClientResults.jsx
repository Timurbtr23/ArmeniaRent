import { Calculator, Camera, Clock, KeyRound, MapPin, MessageCircle } from 'lucide-react'

const items = [
  { icon: Calculator, title: 'Итоговая сумма в одном сообщении', text: 'Аренда, залог, страховка, доставка в аэропорт/центр. Расхождение с финальным чеком: 0 драм' },
  { icon: Camera, title: 'Фото и видео конкретной машины', text: 'Салон, кузов, пробег, комплектация. Не «примерно такая», а именно ваша' },
  { icon: Clock, title: 'Выдача за 30 минут', text: 'Приехали в офис или встретили в аэропорту → осмотр → подписали договор → поехали' },
  { icon: KeyRound, title: 'Возврат за 20 минут', text: 'Паспорт/залог в день сдачи авто — если нет новых повреждений' },
  { icon: MapPin, title: 'Советы по маршрутам', text: 'Куда ехать, где остановиться, какие дороги подходят для вашего класса авто' },
  { icon: MessageCircle, title: 'Поддержка в чате 24/7', text: 'Если что-то случилось в дороге, не останетесь один на один с проблемой' },
]

export default function ClientResults() {
  return (
    <section id="client-results" className="py-16 sm:py-20 md:py-24 bg-zinc-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 sm:mb-14">
          <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-zinc-50 leading-tight max-w-3xl mx-auto">Через 15 минут после обращения у вас на руках расчёт, фото авто и условия</h2>
          <p className="mt-4 text-base sm:text-lg text-zinc-400 leading-relaxed max-w-2xl mx-auto">Вот что конкретно вы получаете, когда арендуете у нас.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {items.map((item, i) => (
            <div key={i} className="group bg-zinc-900 rounded-2xl p-6 hover:shadow-md hover:-translate-y-1 transition-all duration-200">
              <div className="w-11 h-11 rounded-xl bg-accent-500/10 flex items-center justify-center mb-4 group-hover:bg-accent-500/20 transition-colors duration-200">
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