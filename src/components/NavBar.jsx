import { useState, useEffect } from 'react'
import { Menu } from 'lucide-react'

export default function NavBar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`fixed inset-x-0 top-0 z-30 transition-all ${scrolled ? 'backdrop-blur bg-white/70 border-b border-slate-200/60 shadow-sm' : 'bg-transparent'}`}>
      <div className="container mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#home" className="font-extrabold tracking-tight text-slate-900 text-lg">
          <span className="inline-block h-6 w-6 rounded-full mr-2 align-middle bg-[#3B8A41]"></span>
          Visser Groente en Fruit
        </a>

        <nav className="hidden sm:flex items-center gap-6 text-slate-700">
          <a href="#about" className="hover:text-slate-900">Over ons</a>
          <a href="#locaties" className="hover:text-slate-900">Locaties</a>
          <a href="#assortiment" className="hover:text-slate-900">Assortiment</a>
          <a href="#galerij" className="hover:text-slate-900">Galerij</a>
          <a href="#contact" className="hover:text-slate-900">Contact</a>
          <a href="#assortiment" className="ml-2 rounded-full px-4 py-2 text-white bg-[#3B8A41] hover:bg-[#357a3a] shadow">Bekijk assortiment</a>
        </nav>

        <button className="sm:hidden p-2 rounded-md text-slate-700 hover:bg-slate-100" onClick={() => setOpen(v => !v)} aria-label="menu">
          <Menu className="w-6 h-6" />
        </button>
      </div>

      {open && (
        <div className="sm:hidden border-t border-slate-200 bg-white/90 backdrop-blur">
          <div className="px-6 py-4 grid gap-3 text-slate-800">
            <a href="#about" onClick={() => setOpen(false)}>Over ons</a>
            <a href="#locaties" onClick={() => setOpen(false)}>Locaties</a>
            <a href="#assortiment" onClick={() => setOpen(false)}>Assortiment</a>
            <a href="#galerij" onClick={() => setOpen(false)}>Galerij</a>
            <a href="#contact" onClick={() => setOpen(false)}>Contact</a>
          </div>
        </div>
      )}
    </header>
  )
}
