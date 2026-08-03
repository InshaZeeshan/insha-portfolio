import { motion } from 'framer-motion'

// Tailwind needs literal class names to detect them at build time, so accent
// colors are mapped explicitly here rather than interpolated dynamically.
const ACCENTS = {
  smoothie: {
    tab: 'bg-smoothie',
    body: 'bg-smoothie/90',
    text: 'text-cream',
    subtext: 'text-cream/75',
    stamp: 'bg-cream/20 text-cream',
  },
  milkshake: {
    tab: 'bg-milkshake',
    body: 'bg-milkshake',
    text: 'text-berry',
    subtext: 'text-berry/70',
    stamp: 'bg-white/50 text-berry',
  },
  sorbet: {
    tab: 'bg-sorbet',
    body: 'bg-sorbet',
    text: 'text-berry',
    subtext: 'text-berry/70',
    stamp: 'bg-white/60 text-berry',
  },
}

const ROTATIONS = ['-3deg', '2deg', '-1.5deg']

export default function ProjectFolder({ project, index, onOpen }) {
  const accent = ACCENTS[project.accent] ?? ACCENTS.sorbet
  const rotation = ROTATIONS[index % ROTATIONS.length]

  return (
    <motion.button
      type="button"
      onClick={() => onOpen(project)}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.45, delay: index * 0.08 }}
      whileHover={{ y: -8, rotate: 0 }}
      style={{ '--rot': rotation, transform: `rotate(${rotation})` }}
      className="group relative flex h-64 w-full flex-col text-left focus:outline-none sm:w-72"
      aria-label={`Open project folder: ${project.name}`}
    >
      {/* folder tab */}
      <span
        className={`ml-4 h-6 w-24 rounded-t-xl ${accent.tab} shadow-sm transition-transform group-hover:-translate-y-0.5`}
      />

      {/* folder body */}
      <span
        className={`relative flex-1 rounded-2xl rounded-tl-none ${accent.body} p-5 shadow-folder transition-shadow group-hover:shadow-xl`}
      >
        {/* paper peeking out */}
        <span
          aria-hidden="true"
          className="absolute -top-3 right-6 h-10 w-16 -rotate-6 rounded-md bg-cream shadow-paper transition-transform group-hover:-translate-y-1"
        />
        <span
          aria-hidden="true"
          className="absolute -top-2 right-10 h-9 w-14 rotate-3 rounded-md bg-white/80 shadow-paper transition-transform group-hover:-translate-y-1"
        />

        <span className={`font-mono-label text-[11px] uppercase tracking-wide ${accent.subtext}`}>
          {project.number} · {project.category}
        </span>

        <span className={`mt-2 block font-display text-2xl font-bold ${accent.text}`}>
          {project.name}
        </span>

        <span className={`mt-3 block text-sm ${accent.subtext}`}>{project.blurb}</span>

        <span className="mt-4 flex flex-wrap items-center gap-2">
          <span className={`rounded-full px-2.5 py-1 font-mono-label text-[10px] ${accent.stamp}`}>
            {project.stamp}
          </span>
          <span className={`rounded-full px-2.5 py-1 font-mono-label text-[10px] ${accent.stamp}`}>
            {project.status}
          </span>
        </span>

        <span
          className={`pointer-events-none absolute bottom-4 right-5 font-mono-label text-xs opacity-0 transition-opacity group-hover:opacity-100 ${accent.text}`}
        >
          open me ↗
        </span>
      </span>
    </motion.button>
  )
}
