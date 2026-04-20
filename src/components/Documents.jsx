import { Calculator, Camera, FileText, ScrollText, ClipboardList, Headphones } from 'lucide-react'

const items = [
  { icon: Calculator, time: 'После подтверждения', title: 'Расчёт итоговой стоимости', text: 'Одно сообщение: аренда × дни, страховка. Сумма = сумма в договоре' },
  { icon: Camera, time: 'Через 1 час', title: 'Фото и видео автомобиля', text: 'Фото кузова и салона + видео. Именно ваша машина с номером' },
  { icon: FileText, time: 'Через 2 часа', title: 'Условия страховки', text: 'Что покрывает, что нет, размер франшизы, пример расчёта «мелкая царапина на бампере»' },
  { icon: ScrollText, time: 'Через 3 часа', title: 'Проект договора', text: 'Присылаем заранее. Все пункты на русском, без мелкого шрифта. Вопросы обсуждаем до приезда' },
  { icon: ClipboardList, time: 'Через 4 часа', title: 'Акт осмотра (шаблон)', text: 'Чек-лист из 18 пунктов. Вы видите формат заранее и знаете, что проверяем' },
]

export default function Documents() {
  return (
    <section id="documents" className="py-16 sm:py-20 md:py-24 bg-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 sm:mb-14">
          <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-zinc-50 leading-tight max-w-3xl mx-auto">До приезда вы получите в чат 4 документа</h2>
          <p className="mt-4 text-base sm:text-lg text-zinc-400 leading-relaxed max-w-2xl mx-auto">Вот что мы отправляем в WhatsApp/Telegram после подтверждения брони.</p>
        </div>
        <div className="relative max-w-2xl mx-auto">
          <div className="absolute left-6 top-0 bottom-0 w-px bg-brand-200 hidden sm:block" />
          <div className="flex flex-col gap-8">
            {items.map((item, i) => (
              <div key={i} className="relative flex items-start gap-5 sm:pl-14">
                <div className="hidden sm:flex absolute left-0 w-12 h-12 rounded-full bg-zinc-8000 items-center justify-center z-10">
                  <item.icon className="w-5 h-5 text-white" />
                </div>
                <div className="sm:hidden w-11 h-11 rounded-xl bg-zinc-8000/10 flex items-center justify-center flex-shrink-0">
                  <item.icon className="w-5 h-5 text-brand-500" />
                </div>
                <div className="bg-zinc-800 rounded-2xl p-5 flex-1 border border-zinc-800">
                  <span className="text-xs font-medium uppercase tracking-widest text-brand-500 mb-1 block">{item.time}</span>
                  <h3 className="font-display text-base sm:text-lg font-semibold text-zinc-50 mb-1">{item.title}</h3>
                  <p className="text-sm text-zinc-400 leading-relaxed">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}