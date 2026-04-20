function scrollToId(id) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
}

const steps = [
  { number: '01', title: 'Запрос и подбор', description: 'Вы пишете или звоните — называете даты, маршрут и пожелания по классу авто. Мы подбираем 2–3 варианта и отправляем фото конкретных машин в мессенджер.' },
  { number: '02', title: 'Расчёт и фиксация', description: 'Присылаем итоговую сумму одной строкой: аренда × дни + страховка. Сумма фиксируется и не меняется на выдаче.' },
  { number: '03', title: 'Подтверждение брони', description: 'Вы подтверждаете даты и класс авто. Мы бронируем конкретную машину за вами и отправляем условия договора для ознакомления заранее.' },
  { number: '04', title: 'Выдача с осмотром', description: 'Встречаем в аэропорту или ждём в офисе в центре. Совместный осмотр авто, фото в ваш чат, подписание договора, оплата — и ключи у вас. Весь процесс: до 30 минут.' },
  { number: '05', title: 'Возврат и расчёт', description: 'Привозите авто в офис или в аэропорт. Повторный осмотр с фото, сравнение с выдачей. Если всё в порядке — завершаем аренду за 20 минут.' },
]

export default function Process() {
  return (
    <section id="process" className="relative py-16 sm:py-20 md:py-24 bg-zinc-950 overflow-hidden">
      {/* Декоративное свечение */}
      <div className="absolute top-[-10%] left-[-5%] w-[400px] h-[400px] bg-accent-600/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[5%] w-[350px] h-[350px] bg-sky-600/5 rounded-full blur-[90px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-white leading-tight">
            От первого сообщения до ключей в руке — 5 шагов
          </h2>
          <p className="mt-4 text-base sm:text-lg text-zinc-400 leading-relaxed max-w-2xl mx-auto">
            Каждый шаг фиксируется в переписке. Ничего не нужно запоминать или уточнять повторно.
          </p>
        </div>

        {/* Top row: 3 cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
          {steps.slice(0, 3).map((step) => (
            <StepCard key={step.number} step={step} />
          ))}
        </div>

        {/* Bottom row: 2 cards centered */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl mx-auto">
          {steps.slice(3).map((step) => (
            <StepCard key={step.number} step={step} />
          ))}
        </div>

        <div className="mt-12 text-center">
          <button
            onClick={() => scrollToId('contact')}
            className="min-h-[52px] px-10 py-4 bg-accent-500 hover:bg-accent-400 text-zinc-950 rounded-2xl text-lg font-bold font-display transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] shadow-[0_0_20px_rgba(6,182,212,0.3)] hover:shadow-[0_0_30px_rgba(6,182,212,0.5)]"
          >
            Начать с подбора авто
          </button>
        </div>
      </div>
    </section>
  )
}

function StepCard({ step }) {
  return (
    <div className="group relative bg-zinc-900 border border-zinc-800 rounded-3xl p-6 hover:border-accent-500/40 hover:shadow-[0_0_20px_rgba(6,182,212,0.1)] transition-all duration-300 overflow-hidden">
      {/* Большой номер — декоративный фон */}
      <span className="absolute top-3 right-4 font-display text-7xl font-black text-white/[0.04] select-none leading-none group-hover:text-accent-400/10 transition-colors duration-300">
        {step.number}
      </span>

      {/* Номер-бейдж */}
      <div className="w-10 h-10 rounded-xl bg-zinc-800 border border-accent-500/30 flex items-center justify-center mb-4 group-hover:border-accent-500 group-hover:shadow-[0_0_12px_rgba(6,182,212,0.2)] transition-all duration-300">
        <span className="text-sm font-extrabold text-accent-400 font-display">{step.number}</span>
      </div>

      <h3 className="font-display text-base sm:text-lg font-bold text-white mb-2 group-hover:text-accent-300 transition-colors duration-300">
        {step.title}
      </h3>
      <p className="text-sm text-zinc-400 leading-relaxed">
        {step.description}
      </p>
    </div>
  )
}
