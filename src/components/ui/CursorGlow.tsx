'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { useReducedMotion } from '@/hooks'

export function CursorGlow() {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const reducedMotion = useReducedMotion()

  useEffect(() => {
    if (reducedMotion) return

    const handleMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener('mousemove', handleMove, { passive: true })
    return () => window.removeEventListener('mousemove', handleMove)
  }, [reducedMotion])

  if (reducedMotion) return null

  return (
    <motion.div
      className="fixed pointer-events-none z-[800] mix-blend-screen"
      style={{
        width: 400,
        height: 400,
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(0,229,255,0.15) 0%, rgba(255,215,0,0.1) 50%, transparent 70%)',
        transform: `translate(${position.x - 200}px, ${position.y - 200}px)`,
      }}
      animate={{ scale: [1, 1.1, 1], opacity: [0.4, 0.8, 0.4] }}
      transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
    />
  )
}