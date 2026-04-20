export default function SocialProof() {
  const stats = [
    { value: '30+', label: 'автомобилей в парке: D-класс, кроссоверы, премиум' },
    { value: '9 лет', label: 'на рынке аренды авто в Армении' },
    { value: '30 мин', label: 'среднее время выдачи авто с осмотром' },
    { value: '92%', label: 'клиентов арендуют повторно или рекомендуют' },
  ]

  return (
    <section id="social-proof" className="relative py-16 sm:py-20 md:py-24 bg-zinc-800 overflow-hidden">
      {/* Декоративные свечения (Сyber-Premium) */}
      <div className="absolute top-[-20%] right-[10%] w-[500px] h-[500px] bg-accent-600/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-20%] left-[5%] w-[400px] h-[400px] bg-sky-600/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <div className="text-center mb-10 sm:mb-14">
          <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-white leading-tight max-w-3xl mx-auto drop-shadow-sm">
            За 9 лет работы мы выдали 2 400+ автомобилей
          </h2>
          <p className="mt-4 text-base sm:text-lg text-white/50 leading-relaxed max-w-2xl mx-auto">
            Цифры, которые стоят за нашим подходом «без сюрпризов».
          </p>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center bg-white/[0.03] backdrop-blur-md rounded-3xl p-6 border border-white/5 shadow-xl hover:border-white/10 transition-all duration-300 hover:bg-white/[0.05]">
              <p className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-accent-500 mb-2 drop-shadow-[0_0_15px_rgba(6,182,212,0.3)]">{stat.value}</p>
              <p className="text-sm sm:text-base text-white/70 leading-relaxed font-medium">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}