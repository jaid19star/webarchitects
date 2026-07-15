'use client'

import { motion } from 'framer-motion'
import { Globe, Clock, Shield, Twitter, Github, Linkedin, Dribbble } from 'lucide-react'
import { ScrollReveal } from '@/components/ui/ScrollReveal'

const footerLinks = {
  company: [
    { label: 'About Us', href: '#about' },
    { label: 'Work', href: '#work' },
    { label: 'Services', href: '#services' },
    { label: 'Process', href: '#process' },
    { label: 'Contact', href: '#contact' },
  ],
  services: [
    { label: 'Web Development', href: '#' },
    { label: 'UI/UX Design', href: '#' },
    { label: 'Custom Software', href: '#' },
    { label: 'Brand Identity', href: '#' },
    { label: 'Performance & SEO', href: '#' },
  ],
  resources: [
    { label: 'Blog', href: '#' },
    { label: 'Case Studies', href: '#' },
    { label: 'Open Source', href: '#' },
    { label: 'Design System', href: '#' },
    { label: 'Careers', href: '#' },
  ],
  legal: [
    { label: 'Privacy Policy', href: '#' },
    { label: 'Terms of Service', href: '#' },
    { label: 'Cookie Policy', href: '#' },
    { label: 'Accessibility', href: '#' },
  ],
}

const socialLinks = [
  { icon: Twitter, href: '#', label: 'Twitter' },
  { icon: Github, href: '#', label: 'GitHub' },
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
  { icon: Dribbble, href: '#', label: 'Dribbble' },
]

export function Footer() {
  return (
    <footer className="relative py-16 px-6 border-t border-border-subtle overflow-hidden">
      <div className="absolute inset-0 -z-10" style={{ background: 'radial-gradient(ellipse 80% 50% at 20% 0%, rgba(0, 229, 255, 0.05) 0%, transparent 50%)' }} />
      <div className="absolute inset-0 -z-10 opacity-30" style={{ backgroundImage: 'linear-gradient(rgba(0, 229, 255, 0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 229, 255, 0.04) 1px, transparent 1px)', backgroundSize: '60px 60px', maskImage: 'radial-gradient(ellipse 80% 80% at 50% 50%, black 30%, transparent 70%)' }} />

      <div className="mx-auto max-w-[1400px]">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          <ScrollReveal className="lg:col-span-2">
            <motion.div
              className="font-display text-2xl font-bold bg-gradient-to-r from-cyan-400 via-violet-400 to-pink-400 bg-clip-text text-transparent mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              WebArchitects
            </motion.div>
            <motion.p className="text-ink-muted max-w-sm mb-8" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
              Building digital experiences that perform. Premium web development & design studio for ambitious brands worldwide.
            </motion.p>

            <motion.div className="flex gap-4" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
              {socialLinks.map((social, i) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  className="w-10 h-10 rounded-full bg-surface border border-border flex items-center justify-center text-ink-muted hover:text-cyan-400 hover:border-cyan-500/50 transition-all"
                  whileHover={{ scale: 1.1, boxShadow: '0 0 0 2px rgba(0, 229, 255, 0.3)' }}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + i * 0.05 }}
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </motion.div>

            <motion.div className="flex flex-wrap items-center gap-8 mt-8 text-sm text-ink-muted" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}>
              <div className="flex items-center gap-2">
                <Globe className="w-4 h-4 text-cyan-400" />
                <span>Worldwide</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-cyan-400" />
                <span>24hr Response</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4 text-cyan-400" />
                <span>NDA Friendly</span>
              </div>
            </motion.div>
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link, i) => (
                <motion.li key={link.label} initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.1 + i * 0.05 }}>
                  <a href={link.href} className="text-ink-muted hover:text-cyan-400 transition-colors">
                    {link.label}
                  </a>
                </motion.li>
              ))}
            </ul>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link, i) => (
                <motion.li key={link.label} initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.1 + i * 0.05 }}>
                  <a href={link.href} className="text-ink-muted hover:text-cyan-400 transition-colors">
                    {link.label}
                  </a>
                </motion.li>
              ))}
            </ul>
          </ScrollReveal>

          <ScrollReveal delay={300}>
            <h4 className="font-semibold mb-4">Resources</h4>
            <ul className="space-y-3">
              {footerLinks.resources.map((link, i) => (
                <motion.li key={link.label} initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.1 + i * 0.05 }}>
                  <a href={link.href} className="text-ink-muted hover:text-cyan-400 transition-colors">
                    {link.label}
                  </a>
                </motion.li>
              ))}
            </ul>
          </ScrollReveal>
        </div>

        <ScrollReveal className="pt-8 border-t border-border-subtle">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <motion.p className="text-sm text-ink-muted" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
              © 2026 WebArchitects. All rights reserved. Crafted with precision.
            </motion.p>

            <motion.div className="flex items-center gap-6 text-sm text-ink-muted" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
              {footerLinks.legal.map((link, i) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  className="hover:text-cyan-400 transition-colors"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + i * 0.05 }}
                >
                  {link.label}
                </motion.a>
              ))}
            </motion.div>
          </div>
        </ScrollReveal>
      </div>
    </footer>
  )
}