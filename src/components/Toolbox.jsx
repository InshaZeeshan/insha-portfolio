import { motion } from 'framer-motion'
import skills from '../data/skills.js'

const ROTATIONS = ['-2deg', '1.5deg', '-1deg', '2deg']

export default function Toolbox() {
  return (
    <section id="toolbox" className="px-5 py-24">
      <div className="mx-auto max-w-5xl">
        <div className="max-w-xl">
          <h2 className="font-display text-3xl font-bold text-berry sm:text-4xl">
            things in my toolbox
          </h2>
          <p className="mt-2 text-berry/70">no percentages here — just what I reach for.</p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          {skills.map((group, i) => (
            <motion.div
              key={group.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              style={{ transform: `rotate(${ROTATIONS[i % ROTATIONS.length]})` }}
              className="rounded-3xl bg-white/90 p-6 shadow-paper"
            >
              <p className="font-mono-label text-xs uppercase tracking-wide text-smoothie">
                {group.file}
              </p>
              <h3 className="mt-1 font-display text-xl font-bold text-berry">{group.label}</h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {group.items.map((item, j) => (
                  <span
                    key={item}
                    style={{ transform: `rotate(${ROTATIONS[(i + j) % ROTATIONS.length]})` }}
                    className="rounded-xl bg-milkshake/70 px-3 py-1.5 text-sm font-medium text-berry shadow-sticky"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
