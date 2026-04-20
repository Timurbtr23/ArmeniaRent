import { useState, useEffect } from 'react'
import { BrowserRouter, MemoryRouter, Routes, Route } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import Main from './pages/Main'

const isSSR = typeof window === 'undefined'
const Router = isSSR || (typeof __SANDBOX__ !== 'undefined' && __SANDBOX__) ? MemoryRouter : BrowserRouter

// @surgay-brand-logo
const BRAND_LOGO_URL = '{BRAND_LOGO_URL}' !== 'null' ? '{BRAND_LOGO_URL}' : null;

const NAV_LINKS = [
  { label: 'Автопарк', section: 'pricing' },
  { label: 'Как работаем', section: 'process' },
  { label: 'Условия', section: 'terms' },
  { label: 'Гарантии', section: 'guarantees' },
  { label: 'Отзывы', section: 'testimonials' },
  { label: 'Вопросы', section: 'faq' },
  { label: 'Контакты', section: 'contact' },
]

function scrollToId(id) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
}

function Nav({ brandLogoUrl }) {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = (link) => {
    if (link.section) {
      scrollToId(link.section)
    }
    setMobileOpen(false)
  }

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-zinc-950/95 backdrop-blur-md shadow-lg border-b border-white/5' : 'bg-transparent border-b-0'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        <button onClick={() => scrollToId('hero')} className="flex items-center gap-2">
          <span className="font-display text-xl font-bold text-white tracking-widest uppercase shadow-black/50 drop-shadow-md">Rent a car</span>
        </button>
        <nav className="hidden lg:flex items-center gap-6">
          {NAV_LINKS.map((link) => (
            <a key={link.section} href={`#${link.section}`} onClick={(e) => { e.preventDefault(); handleNavClick(link) }} className="text-sm font-medium text-white/90 hover:text-accent-400 transition-colors duration-200 drop-shadow-md">{link.label}</a>
          ))}
        </nav>
        <div className="hidden lg:block">
          <button onClick={() => scrollToId('contact')} className="min-h-[44px] inline-flex items-center px-6 py-2.5 bg-accent-500 hover:bg-accent-400 text-zinc-950 rounded-xl text-sm font-bold shadow-[0_0_15px_rgba(6,182,212,0.3)] hover:shadow-[0_0_25px_rgba(6,182,212,0.5)] transition-all duration-200">Получить расчёт</button>
        </div>
        <button className="lg:hidden p-2 text-white/90 drop-shadow-md" onClick={() => setMobileOpen((v) => !v)} aria-label="Меню">
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>
      {mobileOpen && (
        <div className="lg:hidden bg-zinc-950/95 backdrop-blur-xl border-t border-white/10 px-4 py-4 flex flex-col gap-4 shadow-2xl">
          {NAV_LINKS.map((link) => (
            <a key={link.section} href={`#${link.section}`} onClick={(e) => { e.preventDefault(); handleNavClick(link) }} className="text-sm font-medium text-zinc-300 hover:text-accent-400 text-left">{link.label}</a>
          ))}
          <button onClick={() => { scrollToId('contact'); setMobileOpen(false) }} className="min-h-[44px] inline-flex items-center px-6 py-2.5 bg-accent-500 hover:bg-accent-400 text-zinc-950 rounded-xl text-sm font-bold shadow-[0_0_15px_rgba(6,182,212,0.3)] self-start transition-all">Получить расчёт</button>
        </div>
      )}
    </header>
  )
}

export default function App() {
  return (
    <Router>
      <Nav brandLogoUrl={BRAND_LOGO_URL} />
      <main className="min-h-screen bg-zinc-950">
        <Routes>
          <Route path="/" element={<Main />} />
        </Routes>
      </main>
    </Router>
  )
}