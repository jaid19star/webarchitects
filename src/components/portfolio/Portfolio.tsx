'use client'

import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { ScrollReveal } from '@/components/ui/ScrollReveal'
import { cn } from '@/lib/utils'

const projects = [
  {
    title: 'FinFlow Dashboard',
    category: 'SaaS / Fintech',
    description:
      'Real-time financial analytics platform with WebSocket data feeds, multi-tenant architecture, and advanced visualization.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop',
    tags: ['Next.js', 'TypeScript', 'Tailwind', 'Prisma', 'PostgreSQL'],
    link: '#',
    featured: true,
  },
  {
    title: 'MedConnect Portal',
    category: 'Healthcare',
    description:
      'HIPAA-compliant patient management system with telemedicine, EHR integration, and automated scheduling.',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&h=600&fit=crop',
    tags: ['React Native', 'Node.js', 'GraphQL', 'AWS', 'Docker'],
    link: '#',
    featured: false,
  },
  {
    title: 'Luxe E-Commerce',
    category: 'E-Commerce',
    description:
      'High-conversion luxury storefront with 3D product viewer, AR try-on, and headless CMS architecture.',
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&h=600&fit=crop',
    tags: ['Next.js', 'Shopify Headless', 'Three.js', 'GSAP', 'Vercel'],
    link: '#',
    featured: true,
  },
  {
    title: 'EduStream Platform',
    category: 'EdTech',
    description:
      'Interactive learning platform with live streaming, progress tracking, and AI-powered recommendations.',
    image: 'https://images.unsplash.com/photo-1501504905252-473c87e0574b?w=800&h=600&fit=crop',
    tags: ['React', 'WebRTC', 'Python', 'TensorFlow', 'Kubernetes'],
    link: '#',
    featured: false,
  },
  {
    title: 'TravelBuddy App',
    category: 'Mobile / Travel',
    description:
      'Cross-platform travel companion with offline maps, itinerary sharing, and real-time flight tracking.',
    image: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=800&h=600&fit=crop',
    tags: ['React Native', 'Expo', 'Firebase', 'Mapbox', 'TypeScript'],
    link: '#',
    featured: false,
  },
  {
    title: 'DataViz Enterprise',
    category: 'Analytics',
    description:
      'Real-time business intelligence dashboard with custom visualizations, alerting, and embedded analytics.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop',
    tags: ['React', 'D3.js', 'ClickHouse', 'WebSockets', 'GraphQL'],
    link: '#',
    featured: true,
  },
]

export function Portfolio() {
  return (
    <section id="work" className="relative py-section-lg px-6">
      <div className="absolute inset-0 -z-10" style={{ background: 'radial-gradient(ellipse 80% 50% at 80% 20%, rgba(255, 215, 0, 0.08) 0%, transparent 50%), radial-gradient(ellipse 60% 60% at 20% 80%, rgba(255, 107, 53, 0.06) 0%, transparent 50%)' }} />
      <div className="absolute inset-0 -z-10 opacity-30" style={{ backgroundImage: 'linear-gradient(rgba(0, 229, 255, 0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 229, 255, 0.04) 1px, transparent 1px)', backgroundSize: '60px 60px', maskImage: 'radial-gradient(ellipse 80% 80% at 50% 50%, black 30%, transparent 70%)' }} />

      <div className="mx-auto max-w-[1400px]">
        <ScrollReveal className="text-center mb-16">
          <motion.span className="inline-block px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-sm font-medium mb-6">
            Selected Work
          </motion.span>
          <h2 className="font-display text-display-xl md:text-display-lg font-bold tracking-tight">
            Projects that <span className="text-gradient-primary">move metrics</span>
          </h2>
        </ScrollReveal>

        <div className="grid lg:grid-cols-12 gap-6">
          {projects.map((project, i) => (
            <ScrollReveal key={project.title} style={{ transitionDelay: `${i * 100}ms` }} className={cn(
              'relative group',
              project.featured ? 'lg:col-span-7 lg:row-span-2' : 'lg:col-span-6'
            )}>
              <motion.article
                className={cn(
                  'relative group rounded-2xl overflow-hidden bg-surface border border-border transition-all duration-500',
                  project.featured ? 'lg:aspect-[16/10]' : 'lg:aspect-[4/3]'
                )}
                whileHover={{ y: -4, boxShadow: '0 40px 80px -20px rgba(0, 229, 255, 0.2)' }}
              >
                <div className="relative aspect-[4/3] lg:aspect-[16/10] overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-108"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-canvas/90 via-transparent to-transparent" />
                  {project.featured && (
                    <motion.div
                      className="absolute top-4 right-4 px-3 py-1 rounded-full bg-cyan-500/20 backdrop-blur text-cyan-400 text-xs font-medium border border-cyan-500/30"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.5 }}
                    >
                      Featured
                    </motion.div>
                  )}
                </div>

                <div className="p-6">
                  <motion.span className="text-xs font-medium text-cyan-400 uppercase tracking-wider">{project.category}</motion.span>
                  <motion.h3 className="text-2xl md:text-3xl font-bold mt-2 mb-3 group-hover:text-cyan-400 transition-colors">
                    {project.title}
                  </motion.h3>
                  <motion.p className="text-ink-muted mb-4 leading-relaxed">{project.description}</motion.p>
                  <motion.div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <motion.span
                        key={tag}
                        className="px-3 py-1 rounded-full text-xs font-medium bg-surface-high text-ink-muted border border-border"
                        whileHover={{ backgroundColor: 'rgba(0, 229, 255, 0.2)', borderColor: 'rgba(0, 229, 255, 0.5)', color: '#00E5FF' }}
                      >
                        {tag}
                      </motion.span>
                    ))}
                  </motion.div>
                  <motion.a
                    href={project.link}
                    className="inline-flex items-center gap-2 text-sm font-medium text-cyan-400 hover:text-cyan-300"
                    whileHover={{ x: 4 }}
                  >
                    View Case Study
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </motion.a>
                </div>
              </motion.article>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal className="text-center mt-16">
          <motion.a
            href="#booking"
            className="inline-flex items-center gap-2 px-10 py-4 text-lg font-medium text-canvas bg-gradient-to-r from-cyan-500 to-violet-600 rounded-xl shadow-xl shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:scale-[1.02] transition-all"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Start Your Project
            <ArrowRight className="w-5 h-5" />
          </motion.a>
        </ScrollReveal>
      </div>
    </section>
  )
}