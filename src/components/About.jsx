import { motion } from 'framer-motion'

const CURRENTLY = [
  { label: 'currently working with', value: 'SAP' },
  { label: 'currently exploring', value: 'ABAP' },
  { label: 'currently building', value: 'developer tools' },
  { label: 'currently curious about', value: 'SAP × AI' },
]

export default function About() {
  return (
    <section id="about" className="px-5 py-24">
      <div className="mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="tilt-left rounded-3xl bg-white/90 p-6 shadow-folder sm:p-10"
        >
          {/* fake browser / document window chrome */}
          <div className="mb-6 flex items-center gap-2 border-b border-berry/10 pb-4">
            <span className="h-2.5 w-2.5 rounded-full bg-milkshake" />
            <span className="h-2.5 w-2.5 rounded-full bg-sorbet" />
            <span className="h-2.5 w-2.5 rounded-full bg-smoothie" />
            <span className="ml-3 font-mono-label text-xs text-berry/50">about_me.txt</span>
          </div>

          <h2 className="font-display text-3xl font-bold text-berry sm:text-4xl">
            a quick file on me
          </h2>

          <div className="mt-6 space-y-4 text-berry/85">
            <p>
              I'm a software engineer with an application-development foundation and professional
              experience in an enterprise SAP environment. At HCLTech, I work on the Ericsson
              project in SAP Basis while building toward SAP/ABAP development through hands-on
              projects of my own.
            </p>
            <p>
              I like understanding how systems fit together — from landscapes and transports to the
              code behind them. That operational context gives me a useful perspective as I move
              deeper into development. Outside SAP, I still enjoy building API-driven applications
              and small tools that let me learn by shipping something tangible.
            </p>
          </div>

          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            {CURRENTLY.map((item) => (
              <div
                key={item.label}
                className="rounded-2xl bg-sorbet/70 px-4 py-3 font-mono-label text-sm text-berry"
              >
                <span className="block text-berry/60">{item.label} →</span>
                <span className="font-semibold">{item.value}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
