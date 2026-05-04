import { motion } from 'framer-motion'

export default function About() {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left: Label + heading */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="font-mono text-accent2 text-xs tracking-widest uppercase">About</span>
            <h2 className="font-heading text-4xl sm:text-5xl font-bold mt-4 mb-8 leading-tight">
              Building Web3
              <br />
              <span className="gradient-text">from the ground up</span>
            </h2>

            {/* Decorative line */}
            <div className="w-16 h-px bg-gradient-to-r from-accent to-accent2 mb-8" />

            <div className="space-y-5 text-subtle font-body font-light leading-relaxed text-base">
              <p>
                I'm a results-driven Web3 creator and community builder based in Indonesia, 
                with hands-on experience moderating communities, managing collaborations, 
                and driving meaningful engagement across crypto ecosystems.
              </p>
              <p>
                My approach is simple: I specialize in turning{' '}
                <span className="text-text font-normal">content into attention</span>,{' '}
                <span className="text-text font-normal">attention into engagement</span>, and{' '}
                <span className="text-text font-normal">engagement into active communities</span>{' '}
                that genuinely care about the projects they're part of.
              </p>
              <p>
                From managing Twitter/X Spaces to building partnerships between protocols, 
                I operate at the intersection of content, community, and growth — 
                where real impact happens in Web3.
              </p>
            </div>
          </motion.div>

          {/* Right: Highlights grid */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="grid grid-cols-2 gap-4"
          >
            {[
              { icon: '🎙️', title: 'KOL & Host', desc: 'Runs X Spaces that drive real conversations and ecosystem growth' },
              { icon: '🤝', title: 'Partnerships', desc: 'Builds bridges between crypto projects for mutual growth' },
              { icon: '📢', title: 'Content Creator', desc: '50M+ impressions through strategic Web3 content' },
              { icon: '🛡️', title: 'Community Lead', desc: 'Moderated 8+ projects, creating healthy crypto communities' },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 + i * 0.1, duration: 0.5 }}
                className="bg-card border border-border rounded-2xl p-5 card-hover"
              >
                <div className="text-2xl mb-3">{item.icon}</div>
                <div className="font-heading font-semibold text-text text-sm mb-2">{item.title}</div>
                <div className="text-subtle text-xs font-body leading-relaxed">{item.desc}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
