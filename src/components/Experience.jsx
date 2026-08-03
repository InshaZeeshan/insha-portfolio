import { motion } from 'framer-motion'
import experience from '../data/experience.js'

export default function Experience() {
  return (
    <section id="experience" className="px-5 py-24">
      <div className="mx-auto max-w-4xl">
        <div className="max-w-xl">
          <h2 className="font-display text-3xl font-bold text-berry sm:text-4xl">
            where i've been working
          </h2>
          <p className="mt-2 font-mono-label text-xs text-berry/50">work_history.log</p>
        </div>

        <div className="mt-10 space-y-8">
          {experience.map((job, i) => (
            <motion.article
              key={job.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className={`relative rounded-3xl bg-white/90 p-6 shadow-paper sm:p-8 ${
                i % 2 === 0 ? 'tilt-left' : 'tilt-right'
              }`}
            >
              {/* paper clip */}
              <span
                aria-hidden="true"
                className="absolute -top-3 left-8 h-7 w-4 rounded-full border-2 border-berry/25 bg-transparent"
              />

              <div className="flex flex-wrap items-start justify-between gap-3">
                <div>
                  <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                    <h3 className="font-display text-2xl font-bold text-berry">{job.company}</h3>
                    <span className="font-mono-label text-xs text-berry/50">{job.period}</span>
                  </div>
                  {job.project && (
                    <p className="text-sm font-medium text-smoothie">{job.project}</p>
                  )}
                  <p className="mt-1 text-sm text-berry/70">{job.role}</p>
                </div>

                {job.current && (
                  <span className="flex items-center gap-1.5 rounded-full bg-sorbet px-3 py-1 font-mono-label text-[11px] text-berry">
                    <span className="h-1.5 w-1.5 rounded-full bg-smoothie" />
                    CURRENTLY HERE
                  </span>
                )}
              </div>

              <ul className="mt-4 space-y-2">
                {job.points.map((point) => (
                  <li key={point} className="flex gap-2 text-sm text-berry/85">
                    <span className="mt-1 text-smoothie">·</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>

              <p className="mt-5 font-mono-label text-xs italic text-berry/50">{job.microcopy}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
