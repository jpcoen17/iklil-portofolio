import { motion } from 'framer-motion'

const skillGroups = [
  {
    category: 'Content & Growth',
    icon: '📈',
    skills: ['Content Writing', 'Social Media Growth', 'Thread Strategy', 'Audience Building'],
  },
  {
    category: 'Community',
    icon: '🌐',
    skills: ['Community Engagement', 'Moderation', 'Relationship Building', 'Conflict Resolution', 'Onboarding'],
  },
  {
    category: 'Web3 Expertise',
    icon: '⛓️',
    skills: ['DeFi', 'NFTs', 'Web3 Research', 'Airdrops', 'Tokenomics', 'DAO Governance'],
  },
  {
    category: 'Tools & Platforms',
    icon: '🛠️',
    skills: ['Zealy', 'Twitter/X Spaces', 'Discord', 'Telegram', 'Notion', 'Galxe'],
  },
]

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <span className="font-mono text-accent2 text-xs tracking-widest uppercase">Skills</span>
          <h2 className="font-heading text-4xl sm:text-5xl font-bold mt-4 text-text">
            My <span className="gradient-text">toolkit</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillGroups.map((group, gi) => (
            <motion.div
              key={gi}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: gi * 0.1, duration: 0.5 }}
              className="bg-card border border-border rounded-2xl p-6 card-hover"
            >
              <div className="text-2xl mb-3">{group.icon}</div>
              <h3 className="font-heading font-semibold text-text text-sm mb-4">{group.category}</h3>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill, si) => (
                  <motion.span
                    key={si}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: gi * 0.1 + si * 0.05 }}
                    className="text-xs font-mono px-3 py-1.5 rounded-full bg-surface border border-border text-subtle hover:text-text hover:border-accent/40 transition-all duration-200 cursor-default"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
