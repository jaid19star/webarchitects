'use client'

import { motion } from 'framer-motion'
import { Zap, Code, Rocket, BarChart3, Lightbulb } from 'lucide-react'
import { ScrollReveal } from '@/components/ui/ScrollReveal'

const processSteps = [
  {
    number: '01',
    title: 'Discover',
    description: 'Deep dive into your vision, users, and business goals. We map the journey together.',
    icon: Lightbulb,
    gradient: 'from-cyan-500 to-blue-500',
    stats: { workshops: 3, stakeholders: '5+', deliverable: 'Strategy Doc' },
  },
  {
    number: '02',
    title: 'Design',
    description: 'Wireframes → High-fidelity prototypes → Design system. Iterate until it feels inevitable.',
    icon: Code,
    gradient: 'from-violet-500 to-purple-500',
    stats: { screens: '25+', components: '50+', iterations: 'Unlimited' },
  },
  {
    number: '03',
    title: 'Develop',
    description: 'Clean, typed, tested code. CI/CD from day one. You see progress every sprint.',
    icon: Zap,
    gradient: 'from-emerald-500 to-teal-500',
    stats: { coverage: '90%+', deploy: 'Daily', review: '<4hrs' },
  },
  {
    number: '04',
    title: 'Launch',
    description: 'Zero-downtime deployment. Monitoring, analytics, and growth tools configured.',
    icon: Rocket,
    gradient: 'from-amber-500 to-orange-500',
    stats: { downtime: '0s', lighthouse: '95+', support: '30 days' },
  },
  {
    number: '05',
    title: 'Scale',
    description: 'Post-launch optimization. A/B tests, performance tuning, feature evolution.',
    icon: BarChart3,
    gradient: 'from-pink-500 to-rose-500',
    stats: { velocity: '+40%', bugs: '-85%', retention: '95%+' },
  },
]

export function Process() {
  return (
    <section id="process" className="relative py-section-lg px-6">
      <div className="absolute inset-0 -z-10" style={{ background: 'radial-gradient(ellipse 80% 50% at 80% 20%, rgba(255, 215, 0, 0.06) 0%, transparent 50%), radial-gradient(ellipse 60% 60% at 20% 80%, rgba(255, 107, 53, 0.05) 0%, transparent 50%)' }} />
      <div className="absolute inset-0 -z-10 opacity-30" style={{ backgroundImage: 'linear-gradient(rgba(0, 229, 255, 0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 229, 255, 0.04) 1px, transparent 1px)', backgroundSize: '60px 60px', maskImage: 'radial-gradient(ellipse 80% 80% at 50% 50%, black 30%, transparent 70%)' }} />

      <div className="mx-auto max-w-[1400px]">
        <ScrollReveal className="text-center mb-20">
          <motion.span className="inline-block px-4 py-1.5 rounded-full bg-gold-500/10 border border-gold-500/20 text-gold-400 text-sm font-medium mb-6">
            Our Process
          </motion.span>
          <h2 className="font-display text-display-xl md:text-display-lg font-bold tracking-tight">
            A refined <span className="text-gradient-gold">5-step journey</span>
          </h2>
          <p className="text-lg text-ink-muted mt-4 max-w-2xl mx-auto">
            We don't just build — we partner. Every step is designed for clarity, speed, and exceptional outcomes.
          </p>
        </ScrollReveal>

        <div className="relative">
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-gold-500/30 to-transparent" />

          <div className="space-y-16">
            {processSteps.map((step, index) => (
              <ScrollReveal key={step.number} style={{ transitionDelay: `${index * 100}ms` }}>
                <motion.div
                  className="relative flex lg:flex-row items-start gap-8"
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                >
                  <motion.div
                    className="flex-shrink-0 w-16 h-16 rounded-2xl flex items-center justify-center text-2xl font-bold text-white shadow-xl relative z-10"
                    style={{ background: step.gradient }}
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                  >
                    {step.number}
                  </motion.div>

                  <motion.div
                    className="flex-1 pl-8 lg:pl-0"
                    initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                  >
                    <motion.div className="flex items-center gap-3 mb-4">
                      <step.icon className="w-6 h-6" style={{ color: step.gradient.split(' ')[1] }} />
                      <h3 className="text-2xl font-bold">{step.title}</h3>
                    </motion.div>
                    <motion.p className="text-ink-muted text-lg mb-6">{step.description}</motion.p>

                    <motion.div className="grid grid-cols-3 gap-4" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
                      {Object.entries(step.stats).map(([key, value]) => (
                        <div key={key} className="text-center p-4 rounded-xl bg-surface/50 border border-border/50">
                          <div className="text-xl font-bold text-gradient-gold">{value}</div>
                          <div className="text-xs text-ink-muted uppercase tracking-wider mt-1">{key}</div>
                        </div>
                      ))}
                    </motion.div>
                  </motion.div>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}