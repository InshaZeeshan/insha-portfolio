import { motion } from 'framer-motion'
import { ArrowDown, FileText, Sparkles } from 'lucide-react'
import profile from '../data/profile.js'
import heroPhoto from '../assets/insha-hero.jpg'

const TAGS = ['SAP', 'ABAP', 'JavaScript', 'Python']

export default function Hero() {
  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <section id="hero" className="relative overflow-hidden px-5 pb-24 pt-16 md:pt-24">
      <div className="mx-auto max-w-6xl">
        <div className="grid items-center gap-14 md:grid-cols-[1.05fr_0.95fr] md:gap-10">
          {/* ---------------- left: text column ---------------- */}
          <div className="relative order-2 md:order-1">
            <motion.p
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="font-mono-label text-sm text-smoothie"
            >
              hello internet, i'm
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.08 }}
              className="font-display text-5xl font-bold leading-[1.05] text-berry sm:text-6xl md:text-7xl"
            >
              Insha Zeeshan
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.16 }}
              className="mt-5 max-w-xl text-lg text-berry/80 sm:text-xl"
            >
              I build software, work inside enterprise SAP, and keep getting curious enough to code the next layer.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.24 }}
              className="mt-6 flex flex-wrap gap-2"
            >
              {TAGS.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-berry/15 bg-white/70 px-3 py-1 font-mono-label text-xs text-berry"
                >
                  {tag}
                </span>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.32 }}
              className="mt-5 space-y-1 font-mono-label text-sm text-berry/70"
            >
              <p>day job → SAP @ HCLTech</p>
              <p>building toward → SAP / ABAP development</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-9 flex flex-wrap items-center gap-3"
            >
              <button
                onClick={() => scrollTo('work')}
                className="group inline-flex items-center gap-2 rounded-full bg-berry px-6 py-3 font-medium text-cream shadow-paper transition-transform hover:-translate-y-0.5"
              >
                explore my work
                <ArrowDown size={16} className="transition-transform group-hover:translate-y-0.5" />
              </button>
              <a
  href={profile.resumeUrl}
  target="_blank"
  rel="noopener noreferrer"
  className="inline-flex items-center gap-2 rounded-full border border-berry/20 bg-white/70 px-6 py-3 font-medium text-berry transition-transform hover:-translate-y-0.5"
>
  <FileText size={16} />
  the serious document.pdf
</a>
            </motion.div>
          </div>

          {/* ---------------- right: photo column ---------------- */}
          <div className="relative order-1 mx-auto w-full max-w-[17rem] sm:max-w-[19rem] md:order-2 md:max-w-[21rem]">
            {/* soft color blobs behind the photo, tie back to the site palette */}
            <div
              className="absolute -left-6 -top-6 h-40 w-40 rounded-full bg-milkshake/60 blur-3xl md:h-56 md:w-56"
              aria-hidden="true"
            />
            <div
              className="absolute -bottom-8 -right-4 h-48 w-48 rounded-full bg-sorbet/70 blur-3xl md:h-64 md:w-64"
              aria-hidden="true"
            />

            {/* the abstract blob frame holding the photo */}
            <motion.div
              initial={{ opacity: 0, scale: 0.94, rotate: -3 }}
              animate={{ opacity: 1, scale: 1, rotate: -2 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="relative rounded-blob bg-gradient-to-br from-smoothie/70 via-berry/65 to-cherry/70 p-2 shadow-paper"
            >
              <div className="overflow-hidden rounded-blob bg-cream">
                <img
                  src={heroPhoto}
                  alt="Insha Zeeshan at her desk, surrounded by tulips, books, and iced coffee"
                  className="aspect-[4/5] w-full object-cover opacity-95"
                />
              </div>
            </motion.div>

            {/* floating sticky note, echoes the one that used to sit up top */}
            <motion.div
              className="tilt-right absolute -right-3 top-4 hidden w-36 rounded-2xl bg-milkshake p-3 shadow-sticky sm:block"
              style={{ '--rot': '4deg' }}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              aria-hidden="true"
            >
              <p className="font-mono-label text-[11px] leading-snug text-berry">
                code curious,
                <br />
                always. ✦
              </p>
            </motion.div>

            {/* small pill badge, bottom-left over the frame */}
            <motion.div
              className="tilt-left absolute -left-3 bottom-6 hidden items-center gap-1.5 rounded-full bg-cream px-3 py-1.5 shadow-sticky sm:flex"
              style={{ '--rot': '-4deg' }}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              aria-hidden="true"
            >
              <Sparkles size={13} className="animate-sparkle text-smoothie" />
              <span className="font-mono-label text-[11px] text-berry">building, always</span>
            </motion.div>
          </div>
        </div>
      </div>

      {/* subtle floating folder decoration, purely visual */}
      <motion.div
        className="absolute -bottom-6 left-6 hidden h-16 w-20 animate-float rounded-2xl bg-sorbet shadow-folder md:block"
        style={{ '--rot': '-6deg' }}
        aria-hidden="true"
      />
    </section>
  )
}
