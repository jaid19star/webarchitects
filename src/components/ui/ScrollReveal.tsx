import { useRef, useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { useReducedMotion } from '@/hooks'

interface ScrollRevealProps {
  children: React.ReactNode
  className?: string
  delay?: number
  distance?: number
  duration?: number
  once?: boolean
  style?: React.CSSProperties
  id?: string
}

export function ScrollReveal({
  children,
  className,
  delay = 0,
  distance = 50,
  duration = 0.8,
  once = true,
  style,
  id,
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)
  const reducedMotion = useReducedMotion()

  useEffect(() => {
    const element = ref.current
    if (!element) return

    if (reducedMotion) {
      requestAnimationFrame(() => setVisible(true))
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          if (once) observer.disconnect()
        } else if (!once) {
          setVisible(false)
        }
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    )

    observer.observe(element)
    return () => observer.disconnect()
  }, [once, reducedMotion])

  if (reducedMotion) {
    return <div ref={ref} id={id} className={className} style={style}>{children}</div>
  }

  return (
    <motion.div
      ref={ref}
      id={id}
      className={className}
      style={style}
      initial={{ opacity: 0, y: distance, scale: 0.95 }}
      animate={visible ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{ duration, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  )
}