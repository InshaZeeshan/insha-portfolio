import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Github, Linkedin, Send } from 'lucide-react'
import profile from '../data/profile.js'

export default function Contact() {
  const [foundSecret, setFoundSecret] = useState(false)

  return (
    <section id="contact" className="px-5 py-24">
      <div className="mx-auto max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="tilt-right relative overflow-hidden rounded-3xl bg-smoothie p-8 text-cream shadow-folder sm:p-12"
        >
          <span
            aria-hidden="true"
            className="pointer-events-none absolute -right-6 -top-6 h-28 w-28 rounded-blob bg-milkshake/20"
          />

          <h2 className="font-display text-3xl font-bold sm:text-4xl">
            you made it all the way down here?
            <br />
            we should probably talk.
          </h2>

          <div className="mt-8 flex flex-wrap gap-4">
            <ContactLink
              icon={<Mail size={18} />}
              label={profile.email === 'YOUR_EMAIL' ? 'email (add yours in profile.js)' : profile.email}
              href={profile.email === 'YOUR_EMAIL' ? undefined : `mailto:${profile.email}`}
            />
            <ContactLink
              icon={<Linkedin size={18} />}
              label="LinkedIn"
              href={profile.linkedin === 'YOUR_LINKEDIN_URL' ? undefined : profile.linkedin}
            />
            <ContactLink
              icon={<Github size={18} />}
              label="see the code →"
              href={profile.github === 'YOUR_GITHUB_URL' ? undefined : profile.github}
            />
          </div>

          <a
            href={profile.email === 'YOUR_EMAIL' ? '#contact' : `mailto:${profile.email}`}
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-cream px-6 py-3 font-medium text-berry transition-transform hover:-translate-y-0.5"
          >
            send me a message ↗
            <Send size={16} />
          </a>

          {/* subtle easter egg: a tiny "hidden file" */}
          <button
            onClick={() => setFoundSecret(true)}
            className="mt-10 block font-mono-label text-[11px] text-cream/40 underline decoration-dotted underline-offset-4 hover:text-cream/70"
          >
            definitely_not_bugs.txt
          </button>
          {foundSecret && (
            <p className="mt-2 font-mono-label text-[11px] text-cream/70" role="status">
              IG handle @inshaazeeshan
            </p>
          )}
        </motion.div>
      </div>
    </section>
  )
}

function ContactLink({ icon, label, href }) {
  const content = (
    <>
      {icon}
      <span className="text-sm font-medium">{label}</span>
    </>
  )

  if (!href) {
    return (
      <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 opacity-70">
        {content}
      </span>
    )
  }

  return (
    <a
      href={href}
      target={href.startsWith('http') ? '_blank' : undefined}
      rel={href.startsWith('http') ? 'noreferrer' : undefined}
      className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 transition-colors hover:bg-white/20"
    >
      {content}
    </a>
  )
}
