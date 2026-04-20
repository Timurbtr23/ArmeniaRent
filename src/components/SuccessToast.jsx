import { useEffect } from 'react'
import { CheckCircle, X } from 'lucide-react'

export default function SuccessToast({ isOpen, onClose }) {
  useEffect(() => {
    if (!isOpen) return
    const timer = setTimeout(onClose, 6000)
    return () => clearTimeout(timer)
  }, [isOpen, onClose])

  if (!isOpen) return null

  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-[60] w-full max-w-sm px-4 animate-slide-up">
      <div className="relative bg-zinc-900 border border-accent-500/30 rounded-2xl shadow-[0_0_40px_rgba(6,182,212,0.2)] overflow-hidden">
        {/* прогресс-бар */}
        <div className="absolute bottom-0 left-0 h-0.5 bg-accent-500/60 animate-shrink" />

        <div className="flex items-start gap-4 p-5">
          <div className="w-10 h-10 rounded-full bg-accent-500/15 border border-accent-500/30 flex items-center justify-center flex-shrink-0 mt-0.5">
            <CheckCircle className="w-5 h-5 text-accent-400" />
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-semibold text-zinc-50 mb-1">Заявка принята!</p>
            <p className="text-xs text-zinc-400 leading-relaxed">
              Спасибо! Наш менеджер свяжется с вами в ближайшее время, чтобы подтвердить данные и оформить бронирование.
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-1 hover:bg-white/10 rounded-lg transition-colors flex-shrink-0"
            aria-label="Закрыть"
          >
            <X className="w-4 h-4 text-zinc-500" />
          </button>
        </div>
      </div>
    </div>
  )
}
