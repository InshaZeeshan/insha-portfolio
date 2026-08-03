import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'

const LINKS = [
  { id: 'about', label: 'about' },
  { id: 'work', label: 'work' },
  { id: 'experience', label: 'experience' },
  { id: 'toolbox', label: 'toolbox' },
  { id: 'contact', label: 'say hi' },
]

export default function Navbar() {
  const [active, setActive] = useState('about')
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const sections = LINKS.map((l) => document.getElementById(l.id)).filter(Boolean)
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id)
        })
      },
      { rootMargin: '-40% 0px -50% 0px', threshold: 0 },
    )
    sections.forEach((s) => observer.observe(s))
    return () => observer.disconnect()
  }, [])

  const scrollTo = (id) => {
    setOpen(false)
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-cream/85 backdrop-blur-md shadow-paper' : 'bg-transparent'
      }`}
    >
      <nav
        className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4"
        aria-label="Primary"
      >
        <a
          href="#hero"
          onClick={(e) => {
            e.preventDefault()
            scrollTo('hero')
          }}
          className="font-display text-lg font-bold tracking-tight text-berry"
        >
          insha<span className="text-smoothie">.zip</span>
        </a>

        <div className="hidden items-center gap-1 md:flex">
          {LINKS.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollTo(link.id)}
              className={`relative rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                active === link.id ? 'text-berry' : 'text-berry/60 hover:text-berry'
              }`}
              aria-current={active === link.id ? 'page' : undefined}
            >
              {link.label}
              {active === link.id && (
                <span className="absolute inset-x-3 -bottom-0.5 h-1.5 rounded-full bg-milkshake" />
              )}
            </button>
          ))}
          <span className="ml-3 flex items-center gap-1.5 rounded-full bg-sorbet px-3 py-1.5 font-mono-label text-xs text-berry">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-smoothie/70" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-smoothie" />
            </span>
            currently building
          </span>
        </div>

        <button
          className="rounded-full bg-sorbet p-2 text-berry md:hidden"
          aria-expanded={open}
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {open && (
        <div className="mx-4 mb-4 rounded-3xl bg-white/90 p-3 shadow-folder backdrop-blur md:hidden">
          {LINKS.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollTo(link.id)}
              className={`block w-full rounded-2xl px-4 py-3 text-left text-base font-medium ${
                active === link.id ? 'bg-sorbet text-berry' : 'text-berry/70'
              }`}
            >
              {link.label}
            </button>
          ))}
        </div>
      )}
    </header>
  )
}
