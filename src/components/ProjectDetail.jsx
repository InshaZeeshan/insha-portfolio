import { useEffect, useRef } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { X, ExternalLink, Github } from 'lucide-react'

export default function ProjectDetail({ project, onClose }) {
  const closeRef = useRef(null)

  useEffect(() => {
    if (!project) return undefined

    const previouslyFocused = document.activeElement
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    closeRef.current?.focus()

    const onKey = (e) => {
      if (e.key === 'Escape') onClose()
    }

    window.addEventListener('keydown', onKey)
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = previousOverflow
      previouslyFocused?.focus?.()
    }
  }, [project, onClose])

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          className="fixed inset-0 z-[60] flex items-end justify-center bg-berry/40 p-0 backdrop-blur-sm sm:items-center sm:p-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          role="dialog"
          aria-modal="true"
          aria-labelledby="project-detail-title"
        >
          <motion.div
            initial={{ y: '100%', opacity: 0.6 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: '100%', opacity: 0 }}
            transition={{ type: 'spring', damping: 26, stiffness: 220 }}
            className="max-h-[88vh] w-full max-w-2xl overflow-y-auto rounded-t-3xl bg-cream p-6 shadow-folder sm:rounded-3xl sm:p-9"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between gap-4 border-b border-berry/10 pb-4">
              <div>
                <p className="font-mono-label text-xs uppercase tracking-wide text-smoothie">
                  {project.number} · {project.category}
                </p>
                <h3 id="project-detail-title" className="font-display text-3xl font-bold text-berry">{project.name}</h3>
                <p className="mt-1 font-mono-label text-xs text-berry/60">{project.file}</p>
              </div>
              <button
                ref={closeRef}
                onClick={onClose}
                className="rounded-full bg-white/70 p-2 text-berry"
                aria-label="Close project details"
              >
                <X size={18} />
              </button>
            </div>

            <div className="mt-6 space-y-6">
              <Block title="THE IDEA · why I built it" body={project.idea} />
              <Block title="THE BUILD · what I created" body={project.build} />
              <Block title="UNDER THE HOOD · how it works" body={project.underTheHood} />

              <div>
                <h4 className="font-mono-label text-xs uppercase tracking-wide text-smoothie">
                  TECH STACK
                </h4>
                <div className="mt-2 flex flex-wrap gap-2">
                  {project.techStack.map((t) => (
                    <span
                      key={t}
                      className="rounded-full bg-sorbet/70 px-3 py-1 font-mono-label text-xs text-berry"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <Block title="WHAT I LEARNED" body={project.learned} />
            </div>

            <div className="mt-8 flex flex-wrap gap-3 border-t border-berry/10 pt-6">
              {project.githubUrl ? (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-berry px-5 py-2.5 font-medium text-cream"
                >
                  <Github size={16} /> view code ↗
                </a>
              ) : (
                <span className="inline-flex items-center gap-2 rounded-full bg-berry/10 px-5 py-2.5 font-mono-label text-xs text-berry/60">
                  code link coming soon
                </span>
              )}

              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-berry/20 px-5 py-2.5 font-medium text-berry"
                >
                  <ExternalLink size={16} /> live demo ↗
                </a>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

function Block({ title, body }) {
  return (
    <div>
      <h4 className="font-mono-label text-xs uppercase tracking-wide text-smoothie">{title}</h4>
      <p className="mt-2 text-sm leading-relaxed text-berry/85">{body}</p>
    </div>
  )
}
