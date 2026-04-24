import { useNavigate } from 'react-router-dom'

export default function NotFound() {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen bg-zinc-950 flex flex-col items-center justify-center px-4 text-center">
      <p className="text-accent-400 text-sm font-semibold tracking-widest uppercase mb-4">Ошибка 404</p>
      <h1 className="font-display text-7xl sm:text-9xl font-bold text-white mb-4">404</h1>
      <p className="text-zinc-400 text-lg mb-10 max-w-sm">
        Страница не найдена. Возможно, она была удалена или адрес указан неверно.
      </p>
      <button
        onClick={() => navigate('/')}
        className="min-h-[44px] inline-flex items-center px-8 py-3 bg-accent-500 hover:bg-accent-400 text-zinc-950 rounded-xl text-sm font-bold shadow-[0_0_15px_rgba(6,182,212,0.3)] hover:shadow-[0_0_25px_rgba(6,182,212,0.5)] transition-all duration-200"
      >
        Вернуться на главную
      </button>
    </div>
  )
}
