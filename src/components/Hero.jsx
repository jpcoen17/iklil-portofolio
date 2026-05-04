import { motion } from 'framer-motion'
import profileImg from '../assets/profile.jpeg'

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] },
})

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-24 pb-16 px-6 overflow-hidden">
      {/* Background grid */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(#6C63FF 1px, transparent 1px), linear-gradient(90deg, #6C63FF 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }}
      />

      <div className="max-w-6xl mx-auto w-full">
        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-16 lg:gap-24">
          
          {/* Left: Text */}
          <div className="flex-1 text-center lg:text-left">
            <motion.div {...fadeUp(0.1)} className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-border bg-card mb-8">
              <span className="w-2 h-2 rounded-full bg-accent2 animate-pulse-slow" />
              <span className="text-xs font-mono text-subtle tracking-widest uppercase">Available for opportunities</span>
            </motion.div>

            <motion.h1
              {...fadeUp(0.2)}
              className="font-heading text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-tight mb-6"
            >
              Muhammad
              <br />
              <span className="gradient-text">Iklil</span>
            </motion.h1>

            <motion.p
              {...fadeUp(0.3)}
              className="font-mono text-accent2 text-sm tracking-widest uppercase mb-5"
            >
              Web3 Creator · KOL · Community Manager
            </motion.p>

            <motion.p
              {...fadeUp(0.4)}
              className="text-subtle text-lg leading-relaxed max-w-xl mx-auto lg:mx-0 mb-10 font-body font-light"
            >
              Turning content into attention, attention into engagement,
              and engagement into{' '}
              <span className="text-text">active Web3 communities</span>.
            </motion.p>

            <motion.div {...fadeUp(0.5)} className="flex flex-wrap gap-4 justify-center lg:justify-start">
              <a
                href="#contact"
                className="px-6 py-3 rounded-xl bg-accent text-white font-body font-medium text-sm hover:bg-accent/90 transition-all duration-200 hover:shadow-lg hover:shadow-accent/20"
              >
                Get in touch
              </a>
              <a
                href="#experience"
                className="px-6 py-3 rounded-xl gradient-border text-text font-body font-medium text-sm hover:bg-white/5 transition-all duration-200"
              >
                View Experience
              </a>
            </motion.div>

            {/* Location tag */}
            <motion.div {...fadeUp(0.6)} className="mt-10 flex items-center gap-2 justify-center lg:justify-start text-subtle text-sm font-body">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                <circle cx="12" cy="10" r="3"/>
              </svg>
              Indonesia · Open to remote
            </motion.div>
          </div>

          {/* Right: Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="relative flex-shrink-0"
          >
            {/* Outer glow ring */}
            <div className="absolute -inset-4 rounded-full bg-gradient-to-br from-accent/30 to-accent2/20 blur-2xl animate-pulse-slow" />
            
            {/* Gradient border ring */}
            <div className="relative w-64 h-64 sm:w-72 sm:h-72 rounded-full p-[3px] bg-gradient-to-br from-accent via-accent2 to-accent animate-float">
              <div className="w-full h-full rounded-full overflow-hidden bg-card">
                <img
                  src={profileImg}
                  alt="Muhammad Iklil"
                  className="w-full h-full object-cover object-top"
                />
              </div>
            </div>

            {/* Floating badge: Spaces */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8, duration: 0.5 }}
              className="absolute -right-6 top-8 bg-card border border-border rounded-2xl px-4 py-3 shadow-xl"
            >
              <div className="text-2xl font-heading font-bold gradient-text">50+</div>
              <div className="text-xs text-subtle font-mono">X Spaces hosted</div>
            </motion.div>

            {/* Floating badge: Impressions */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1, duration: 0.5 }}
              className="absolute -left-6 bottom-12 bg-card border border-border rounded-2xl px-4 py-3 shadow-xl"
            >
              <div className="text-2xl font-heading font-bold gradient-text">50M+</div>
              <div className="text-xs text-subtle font-mono">Impressions</div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
