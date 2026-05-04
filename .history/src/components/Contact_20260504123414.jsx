import { motion } from 'framer-motion'

const socials = [
  {
    label: 'Twitter / X',
    handle: '@iklilcrypt',
    href: 'https://x.com/iklilcrypt',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.73-8.835L1.254 2.25H8.08l4.253 5.622 5.91-5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
      </svg>
    ),
    color: 'hover:border-sky-500/40 hover:text-sky-400',
  },
  {
    label: 'Telegram',
    handle: '@Jokercrypt17',
    href: 'https://t.me/Jokercrypt17',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
      </svg>
    ),
    color: 'hover:border-blue-500/40 hover:text-blue-400',
  },
  {
    label: 'Email',
    handle: 'muhammadiklil520@gmail.com',
    href: 'mailto:muhammadiklil520@gmail.com',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="2" y="4" width="20" height="16" rx="2"/>
        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
      </svg>
    ),
    color: 'hover:border-accent/40 hover:text-accent',
  },
]

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="max-w-2xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="font-mono text-accent2 text-xs tracking-widest uppercase">Contact</span>
            <h2 className="font-heading text-4xl sm:text-5xl font-bold mt-4 mb-6 text-text">
              Let's build
              <br />
              <span className="gradient-text">something together</span>
            </h2>
            <p className="text-subtle font-body text-lg leading-relaxed mb-12 font-light">
              Whether you're a Web3 founder, a protocol team, or a project looking for a 
              dedicated community builder — I'd love to connect.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
            {socials.map((s, i) => (
              <motion.a
                key={i}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`flex flex-col items-center gap-3 p-6 bg-card border border-border rounded-2xl text-subtle transition-all duration-300 card-hover ${s.color}`}
              >
                <div className="opacity-70">{s.icon}</div>
                <div>
                  <div className="font-heading font-semibold text-sm">{s.label}</div>
                  <div className="font-mono text-xs mt-0.5 opacity-70">{s.handle}</div>
                </div>
              </motion.a>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="inline-flex items-center gap-2 text-subtle text-sm font-body"
          >
            <span className="w-2 h-2 rounded-full bg-accent2 animate-pulse-slow" />
            Open to full-time roles, freelance, and collaborations
          </motion.div>
        </div>
      </div>
    </section>
  )
}
