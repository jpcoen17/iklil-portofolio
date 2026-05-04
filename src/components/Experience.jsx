import { motion } from 'framer-motion'

const experiences = [
  {
    role: 'Collaboration Manager',
    type: 'Partnerships & Growth',
    period: 'Web3',
    color: 'from-accent to-accent/50',
    icon: '🤝',
    responsibilities: [
      'Built strategic partnerships between crypto projects',
      'Identified mutually beneficial collaboration opportunities',
      'Helped drive ecosystem growth through cross-project initiatives',
    ],
  },
  {
    role: 'Community Support Specialist',
    type: 'User Experience',
    period: 'Web3',
    color: 'from-accent2 to-accent2/50',
    icon: '💬',
    responsibilities: [
      'Assisted users with technical issues and onboarding',
      'Translated complex crypto concepts into clear explanations',
      'Resolved disputes and improved overall community experience',
    ],
  },
  {
    role: 'Zealy Admin',
    type: 'Platform Operations',
    period: 'Web3',
    color: 'from-purple-500 to-purple-500/50',
    icon: '⚙️',
    responsibilities: [
      'Managed onboarding flows and daily platform operations',
      'Moderated content and enforced community compliance',
      'Optimized engagement campaigns using Zealy analytics',
    ],
  },
  {
    role: 'Community Moderator',
    type: 'AptosYo · Point Network · Sacred Finance · Payper Finance · Plexus · UltraTrade · Astroport · IDriss',
    period: '8 Projects',
    color: 'from-emerald-500 to-emerald-500/50',
    icon: '🛡️',
    responsibilities: [
      'Managed daily discussions and maintained community health',
      'Created a positive, inclusive environment for community members',
      'Promptly answered user questions and resolved escalations',
    ],
  },
  {
    role: 'Brand Ambassador',
    type: 'Awareness & Promotion',
    period: 'Web3',
    color: 'from-orange-500 to-orange-500/50',
    icon: '📣',
    responsibilities: [
      'Represented crypto projects within the Web3 community',
      'Promoted projects authentically to relevant audiences',
      'Supported awareness campaigns and growth initiatives',
    ],
  },
]

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-14"
        >
          <span className="font-mono text-accent2 text-xs tracking-widest uppercase">Experience</span>
          <h2 className="font-heading text-4xl sm:text-5xl font-bold mt-4 text-text">
            Where I've created
            <br />
            <span className="gradient-text">real impact</span>
          </h2>
        </motion.div>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-accent via-border to-transparent hidden lg:block" />

          <div className="space-y-6">
            {experiences.map((exp, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.6, delay: i * 0.05 }}
                className="lg:pl-16 relative"
              >
                {/* Timeline dot */}
                <div className={`absolute left-4 top-8 w-4 h-4 rounded-full bg-gradient-to-br ${exp.color} hidden lg:block border-2 border-bg`} />

                <div className="bg-card border border-border rounded-2xl p-7 card-hover group">
                  <div className="flex flex-col sm:flex-row sm:items-start gap-4">
                    <div className="text-3xl flex-shrink-0">{exp.icon}</div>
                    
                    <div className="flex-1">
                      <div className="flex flex-wrap items-center gap-3 mb-1">
                        <h3 className="font-heading font-bold text-text text-lg">{exp.role}</h3>
                        <span className={`text-xs font-mono px-2.5 py-1 rounded-full bg-gradient-to-r ${exp.color} bg-opacity-10 text-white/80`}>
                          {exp.period}
                        </span>
                      </div>
                      <p className="text-accent2 text-xs font-mono mb-4 leading-relaxed">{exp.type}</p>

                      <ul className="space-y-2">
                        {exp.responsibilities.map((r, j) => (
                          <li key={j} className="flex items-start gap-3 text-subtle text-sm font-body leading-relaxed">
                            <span className="w-1 h-1 rounded-full bg-accent mt-2 flex-shrink-0" />
                            {r}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
