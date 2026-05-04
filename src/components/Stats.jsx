import { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'

function useCounter(target, duration = 2000, start = false) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!start) return
    let startTime = null
    const step = (timestamp) => {
      if (!startTime) startTime = timestamp
      const progress = Math.min((timestamp - startTime) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setCount(Math.floor(eased * target))
      if (progress < 1) requestAnimationFrame(step)
    }
    requestAnimationFrame(step)
  }, [start, target, duration])

  return count
}

function StatCard({ value, suffix, label, description, delay }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const count = useCounter(value, 2200, inView)

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
      className="relative bg-card border border-border rounded-2xl p-8 card-hover group"
    >
      {/* Corner accent */}
      <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-accent/10 to-accent2/5 rounded-2xl rounded-tl-none rounded-br-none opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      
      <div className="relative">
        <div className="font-heading text-4xl sm:text-5xl font-bold mb-2">
          <span className="gradient-text">
            {count.toLocaleString()}{suffix}
          </span>
        </div>
        <div className="text-text font-body font-medium mb-1">{label}</div>
        <div className="text-subtle text-sm font-body leading-relaxed">{description}</div>
      </div>
    </motion.div>
  )
}

const stats = [
  {
    value: 42,
    suffix: 'K+',
    label: 'Community Growth',
    description: 'Followers contributed across Web3 ecosystems',
  },
  {
    value: 50,
    suffix: 'M+',
    label: 'Total Impressions',
    description: 'Generated through strategic content creation',
  },
  {
    value: 50,
    suffix: '+',
    label: 'X Spaces Hosted',
    description: 'Live sessions driving real conversations in crypto',
  },
  {
    value: 8,
    suffix: '+',
    label: 'Ecosystems',
    description: 'Active contributor across multiple Web3 protocols',
  },
]

export default function Stats() {
  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <span className="font-mono text-accent2 text-xs tracking-widest uppercase">Impact</span>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold mt-3 text-text">
            Numbers that matter
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {stats.map((s, i) => (
            <StatCard key={i} {...s} delay={i * 0.1} />
          ))}
        </div>
      </div>
    </section>
  )
}
