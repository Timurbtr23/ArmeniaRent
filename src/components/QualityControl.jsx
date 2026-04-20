import { Wrench, Sparkles, Camera, FileCheck } from 'lucide-react'

const items = [
  { icon: Wrench, title: 'Техническая проверка', text: 'Тормоза, масло, шины, кондиционер, электрика. Если что-то не в норме — машину не выдаём, предлагаем замену того же класса' },
  { icon: Sparkles, title: 'Мойка и химчистка', text: 'Авто передаём чистым. Фото чистого салона отправляем до выдачи, чтобы вы видели, что получите' },
  { icon: Camera, title: 'Фотофиксация кузова', text: '12+ ракурсов — все дефекты фиксируем в акте и в вашем чате до передачи ключей. Новых «старых царапин» при возврате не появится' },
  { icon: FileCheck, title: 'Проверка документов', text: 'Страховка, техосмотр, регистрация актуальны на весь период вашей аренды' },
]

export default function QualityControl() {
  return (
    <section id="quality-control" className="py-16 sm:py-20 md:py-24 bg-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-10 sm:mb-14">
          <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-zinc-50 leading-tight">Каждый автомобиль проходит 4 проверки перед выдачей</h2>
          <p className="mt-4 text-base sm:text-lg text-zinc-400 leading-relaxed max-w-2xl">Как мы убеждаемся, что машина готова к вашему маршруту.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {items.map((item, i) => (
            <div key={i} className="group flex items-start gap-4 rounded-2xl border border-zinc-800 bg-zinc-800 p-6 hover:border-brand-400 transition-colors duration-200">
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