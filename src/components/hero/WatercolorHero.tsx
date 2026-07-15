'use client'

import { HeroContent } from './HeroContent'
import { Canvas3D } from './Canvas3D'
import { CursorGlow } from '@/components/ui/CursorGlow'

export function WatercolorHero() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden" aria-label="Hero">
      <div className="absolute inset-0 -z-10" style={{ background: 'radial-gradient(ellipse 80% 50% at 20% 20%, rgba(0, 229, 255, 0.15) 0%, transparent 50%), radial-gradient(ellipse 60% 60% at 80% 30%, rgba(255, 215, 0, 0.12) 0%, transparent 50%), radial-gradient(ellipse 50% 50% at 50% 80%, rgba(255, 107, 53, 0.1) 0%, transparent 50%), radial-gradient(ellipse 100% 100% at 50% 50%, rgba(0, 229, 255, 0.05) 0%, transparent 70%)' }} />
      <div className="absolute inset-0 -z-10 opacity-30" style={{ backgroundImage: 'linear-gradient(rgba(0, 229, 255, 0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 229, 255, 0.04) 1px, transparent 1px)', backgroundSize: '60px 60px', maskImage: 'radial-gradient(ellipse 80% 80% at 50% 50%, black 30%, transparent 70%)' }} />
      <Canvas3D />
      <HeroContent />
      <CursorGlow />
    </section>
  )
}