import { ArrowUp } from 'lucide-react'

export default function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  return (
    <footer className="px-5 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 border-t border-berry/10 pt-8 text-sm text-berry/60 sm:flex-row">
        {/* easter egg: developer note, visible in source & to curious readers */}
        {/* somehow this worked */}
        <p className="font-mono-label text-xs">
          built with curiosity, iteration &amp; a suspicious number of open tabs ♡
        </p>

        <button
          onClick={scrollToTop}
          className="inline-flex items-center gap-1.5 rounded-full bg-white/70 px-4 py-2 font-mono-label text-xs text-berry transition-transform hover:-translate-y-0.5"
        >
          back to top <ArrowUp size={14} />
        </button>
      </div>
    </footer>
  )
}
