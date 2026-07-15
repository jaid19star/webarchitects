'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Sparkles } from 'lucide-react'
import { Button } from '@/components/ui/Button'

interface HeroContentProps {
  className?: string
}

export function HeroContent({ className = '' }: HeroContentProps) {
  return (
    <div className={`relative z-10 flex flex-col items-center justify-center min-h-screen px-6 ${className}`}>
      <motion.div
        className="text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.3 }}
      >
        <motion.div
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-sm font-medium mb-8"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <Sparkles className="w-4 h-4" />
          <span>Now accepting Q1 2026 projects</span>
        </motion.div>

        <motion.div
          className="mb-6"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
        >
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-[1.05] tracking-tight">
            We build <br />
            <span className="text-gradient-primary">digital experiences</span>
            <br />that perform
          </h1>
        </motion.div>

        <motion.div
          className="mb-10 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 30, filter: 'blur(8px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{ duration: 1, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="text-lg md:text-xl text-ink-muted leading-relaxed">
            Premium web development & design studio crafting high-performance applications,
            stunning interfaces, and scalable systems for ambitious brands worldwide.
          </p>
        </motion.div>

        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <Button size="lg" className="bg-gradient-to-r from-cyan-500 to-violet-600 text-white px-10 py-4 text-lg shadow-xl shadow-cyan-500/25">
            Start Your Project
            <ArrowRight className="ml-2 w-5 h-5 inline-block" />
          </Button>
          <motion.a
            href="#work"
            className="px-10 py-4 text-lg font-medium text-ink-muted hover:text-ink border border-slate-700 rounded-xl transition-all hover:border-cyan-500/50"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            View Our Work
          </motion.a>
        </motion.div>

        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          {[
            { value: '50+', label: 'Projects Delivered' },
            { value: '15+', label: 'Happy Clients' },
            { value: '98%', label: 'Client Retention' },
            { value: '24/7', label: 'Support Available' },
          ].map((stat, i) => (
            <motion.div
              key={stat.label}
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.1 + i * 0.1 }}
            >
              <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 to-pink-400 bg-clip-text text-transparent mb-1">
                {stat.value}
              </div>
              <div className="text-sm font-medium text-ink-muted">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-ink-muted"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
      >
        <span className="text-xs uppercase tracking-widest">Scroll</span>
        <motion.div className="w-1 h-6 rounded-full bg-gradient-to-b from-cyan-500 to-transparent" />
      </motion.div>
    </div>
  )
}