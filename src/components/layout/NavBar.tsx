'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Globe } from 'lucide-react'
import { MagneticButton } from '@/components/ui/MagneticButton'
import { cn } from '@/lib/utils'

const navLinks = [
  { href: '#work', label: 'Work' },
  { href: '#services', label: 'Services' },
  { href: '#process', label: 'Process' },
  { href: '#booking', label: 'Start Project' },
]

export function NavBar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.header
      className={cn(
        'fixed top-0 left-0 right-0 z-[200] transition-all duration-300',
        scrolled
          ? 'bg-canvas/90 backdrop-blur-xl border-b border-border-subtle shadow-[0_4px_20px_rgba(0,0,0,0.3)]'
          : 'bg-transparent'
      )}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
    >
      <nav className="mx-auto max-w-[1400px] px-6">
        <div className="flex items-center justify-between h-16">
          <a
            href="#"
            className="font-display text-2xl font-bold tracking-tight bg-gradient-to-r from-cyan-400 via-violet-400 to-pink-400 bg-clip-text text-transparent"
            aria-label="WebArchitects Home"
          >
            WebArchitects
          </a>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link, i) => (
              <motion.a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-ink-muted hover:text-ink transition-colors relative"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 + i * 0.05 }}
              >
                {link.label}
                <span className="absolute bottom-[-4px] left-0 right-0 h-0.5 bg-gradient-to-r from-cyan-500 to-gold-400 scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-300" />
              </motion.a>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-4">
            <a
              href="#contact"
              className="px-6 py-2 text-sm font-medium text-ink-muted hover:text-ink border border-border/50 rounded-xl transition-all hover:border-cyan-500/50"
            >
              Get in Touch
            </a>
            <MagneticButton>
              <a href="#booking">Start Project <Globe className="ml-2 w-4 h-4" /></a>
            </MagneticButton>
          </div>

          <button
            className="md:hidden p-2 rounded-lg text-ink-muted hover:text-ink hover:bg-surface transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="md:hidden fixed top-16 left-0 right-0 bg-canvas/95 backdrop-blur-xl border-b border-border-subtle z-100 px-6 py-8"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <nav className="flex flex-col gap-4 space-y-4 border-t border-border-subtle">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  className="px-4 py-3 text-lg font-medium text-ink-muted hover:text-ink rounded-xl transition-colors"
                  onClick={() => setMobileOpen(false)}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: 0.1 + i * 0.05 }}
                >
                  {link.label}
                </motion.a>
              ))}
              <div className="pt-4 border-t border-border-subtle flex flex-col gap-3">
                <a
                  href="#contact"
                  className="px-6 py-3 text-center font-medium text-ink-muted border border-border/50 rounded-xl transition-colors hover:border-cyan-500/50"
                >
                  Get in Touch
                </a>
                <MagneticButton>
                  <a href="#booking" className="w-full">Start Project <Globe className="ml-2 w-4 h-4 inline" /></a>
                </MagneticButton>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}