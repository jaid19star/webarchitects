'use client'

import { motion } from 'framer-motion'
import { ScrollReveal } from '@/components/ui/ScrollReveal'
import { Card } from '@/components/ui/Card'

const testimonials = [
  {
    quote: 'WebArchitects revolutionized our digital footprint. Conversions doubled within 3 months of launch. Their attention to performance and UX is unmatched.',
    author: 'Sarah Chen',
    role: 'CTO',
    company: 'Lumina FinTech',
    avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=100&h=100&fit=crop&crop=face',
    rating: 5,
    metric: { label: 'Conversion Increase', value: '+100%' },
  },
  {
    quote: 'Their design system approach saved us months of decision fatigue. Every component just works. Highly recommended for any serious product team.',
    author: 'Marcus Johnson',
    role: 'Founder',
    company: 'Aether Collective',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face',
    rating: 5,
    metric: { label: 'Dev Velocity', value: '3x Faster' },
  },
  {
    quote: 'The team thinks like product owners, not just developers. They caught UX issues before we even launched. True partners in every sense.',
    author: 'Priya Sharma',
    role: 'VP Product',
    company: 'Nebula Health',
    avatar: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=100&h=100&fit=crop&crop=face',
    rating: 5,
    metric: { label: 'Launch Success', value: 'Zero Bugs' },
  },
  {
    quote: 'From concept to production in 6 weeks — half the estimated timeline. Code quality is exceptional. We\'re already planning the next phase.',
    author: 'David Park',
    role: 'CEO',
    company: 'Quantum Logistics',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face',
    rating: 5,
    metric: { label: 'Timeline', value: '50% Faster' },
  },
  {
    quote: 'Their 3D product viewer and AR try-on increased our conversion by 40%. The technical execution was flawless across all devices.',
    author: 'Elena Rodriguez',
    role: 'CMO',
    company: 'Aether E-Commerce',
    avatar: 'https://images.unsplash.com/photo-1598550476439-6847785fbc62?w=100&h=100&fit=crop&crop=face',
    rating: 5,
    metric: { label: 'Revenue Growth', value: '$2.4M+' },
  },
  {
    quote: 'HIPAA-compliant, scalable, and beautiful. They delivered a patient portal that our clinicians actually enjoy using. Rare combination.',
    author: 'Dr. James Liu',
    role: 'Chief Medical Officer',
    company: 'Nebula Health Portal',
    avatar: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=100&h=100&fit=crop&crop=face',
    rating: 5,
    metric: { label: 'Adoption Rate', value: '94%' },
  },
]

export function Testimonials() {
  const items = [...testimonials, ...testimonials]

  return (
    <section className="relative py-section-lg px-6 overflow-hidden">
      <div className="absolute inset-0 -z-10" style={{ background: 'radial-gradient(ellipse 80% 50% at 50% 50%, rgba(255, 215, 0, 0.05) 0%, transparent 70%)' }} />
      <div className="absolute inset-0 -z-10 opacity-5" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 256 256\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noise\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noise)\'/%3E%3C/svg%3E")', backgroundSize: '256px 256px' }} />

      <div className="mx-auto max-w-[1400px]">
        <ScrollReveal className="text-center mb-20">
          <motion.span className="inline-block px-4 py-1.5 rounded-full bg-gold-500/10 border border-gold-500/20 text-gold-400 text-sm font-medium mb-6">
            Trusted by Leaders
          </motion.span>
          <h2 className="font-display text-display-xl md:text-display-lg font-bold tracking-tight">
            Results that <span className="text-gradient-primary">speak louder</span>
          </h2>
        </ScrollReveal>

        <div className="relative">
          <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-canvas to-transparent z-10 pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-canvas to-transparent z-10 pointer-events-none" />

          <div className="overflow-hidden">
            <motion.div
              className="flex gap-6"
              animate={{ x: [-3200, 0] }}
              transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
              style={{ width: 'max-content' }}
            >
              {items.map((testimonial, index) => (
                <motion.div
                  key={`${testimonial.author}-${index}`}
                  className="flex-shrink-0 w-[400px]"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="h-full p-8 group">
                    <motion.div className="flex items-center gap-1 mb-6">
                      {[...Array(5)].map((_, i) => (
                        <motion.svg
                          key={i}
                          className="w-5 h-5 text-gold-400 fill-current"
                          viewBox="0 0 24 24"
                          initial={{ opacity: 0, scale: 0.5, rotate: -90 }}
                          animate={{ opacity: 1, scale: 1, rotate: 0 }}
                          transition={{ duration: 0.3, delay: 0.2 + i * 0.05 }}
                        >
                          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                        </motion.svg>
                      ))}
                    </motion.div>

                    <motion.p className="text-ink text-lg leading-relaxed mb-8">
                      &ldquo;{testimonial.quote}&rdquo;
                    </motion.p>

                    {testimonial.metric && (
                      <motion.div className="mb-8 p-4 rounded-xl bg-gold-500/10 border border-gold-500/20" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
                        <div className="text-sm font-medium text-gold-400 uppercase tracking-wider mb-1">
                          {testimonial.metric.label}
                        </div>
                        <div className="text-2xl font-bold text-gold-400">{testimonial.metric.value}</div>
                      </motion.div>
                    )}

                    <motion.div className="flex items-center gap-4" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}>
                      <motion.img
                        src={testimonial.avatar}
                        alt={testimonial.author}
                        className="w-12 h-12 rounded-full object-cover border border-gold-500/30"
                        whileHover={{ scale: 1.05, boxShadow: '0 0 0 2px #FFD700' }}
                      />
                      <div>
                        <div className="font-semibold">{testimonial.author}</div>
                        <div className="text-sm text-ink-muted">{testimonial.role}, {testimonial.company}</div>
                      </div>
                    </motion.div>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}