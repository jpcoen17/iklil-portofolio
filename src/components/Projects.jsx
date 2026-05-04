import { motion } from 'framer-motion'

const ecosystems = [
  { name: 'AptosYo', chain: 'Aptos', role: 'Moderator', color: '#4A90E2' },
  { name: 'Point Network', chain: 'Multi-chain', role: 'Moderator', color: '#9B59B6' },
  { name: 'Sacred Finance', chain: 'DeFi', role: 'Moderator', color: '#2ECC71' },
  { name: 'Payper Finance', chain: 'DeFi', role: 'Moderator', color: '#E74C3C' },
  { name: 'Plexus', chain: 'Web3', role: 'Moderator', color: '#F39C12' },
  { name: 'UltraTrade', chain: 'Trading', role: 'Moderator', color: '#1ABC9C' },
  { name: 'Astroport', chain: 'Terra / Cosmos', role: 'Moderator', color: '#E91E8C' },
  { name: 'IDriss', chain: 'Identity', role: 'Moderator', color: '#6C63FF' },
]

const activities = [
  { label: 'Twitter/X Spaces hosted', value: '50+', icon: '🎙️' },
  { label: 'Web3 communities moderated', value: '8+', icon: '🛡️' },
  { label: 'Collaborations facilitated', value: 'Multiple', icon: '🤝' },
  { label: 'Ecosystem campaigns run', value: 'Active', icon: '🚀' },
]

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-14"
        >
          <span className="font-mono text-accent2 text-xs tracking-widest uppercase">Collaborations</span>
          <h2 className="font-heading text-4xl sm:text-5xl font-bold mt-4 text-text">
            Ecosystems I've
            <br />
            <span className="gradient-text">contributed to</span>
          </h2>
        </motion.div>

        {/* Ecosystem cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-14">
          {ecosystems.map((eco, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07, duration: 0.5 }}
              className="bg-card border border-border rounded-2xl p-5 card-hover group relative overflow-hidden"
            >
              {/* Colored top bar */}
              <div
                className="absolute top-0 left-0 right-0 h-0.5 opacity-60 group-hover:opacity-100 transition-opacity"
                style={{ background: `linear-gradient(90deg, ${eco.color}, transparent)` }}
              />

              <div
                className="w-8 h-8 rounded-lg mb-4 flex items-center justify-center text-sm font-heading font-bold text-white"
                style={{ background: `${eco.color}22`, color: eco.color }}
              >
                {eco.name.charAt(0)}
              </div>

              <h3 className="font-heading font-semibold text-text text-sm mb-1">{eco.name}</h3>
              <div className="text-subtle text-xs font-mono mb-2">{eco.chain}</div>
              <span className="text-xs px-2 py-0.5 rounded-full border border-border text-subtle font-mono">
                {eco.role}
              </span>
            </motion.div>
          ))}
        </div>

        {/* Activity stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-card border border-border rounded-2xl p-8"
        >
          <h3 className="font-heading font-semibold text-text mb-6 text-lg">Activity Overview</h3>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {activities.map((a, i) => (
              <div key={i} className="text-center">
                <div className="text-2xl mb-2">{a.icon}</div>
                <div className="font-heading font-bold text-2xl gradient-text mb-1">{a.value}</div>
                <div className="text-subtle text-xs font-body leading-snug">{a.label}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
