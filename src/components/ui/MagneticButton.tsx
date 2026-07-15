'use client'

import { forwardRef, useRef, useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { useReducedMotion } from '@/hooks'

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>

interface MagneticButtonProps extends ButtonProps {
  children: React.ReactNode
  className?: string
  strength?: number
}

const MagneticButtonComponent = (
  { children, className, strength = 0.3, ...restProps }: MagneticButtonProps,
  ref: React.ForwardedRef<HTMLButtonElement>
) => {
  const elementRef = useRef<HTMLButtonElement>(null)
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const reducedMotion = useReducedMotion()

  useEffect(() => {
    if (reducedMotion) return

    const el = elementRef.current
    if (!el) return

    const handleMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect()
      const x = (e.clientX - rect.left - rect.width / 2) * strength
      const y = (e.clientY - rect.top - rect.height / 2) * strength
      setPosition({ x, y })
    }

    const handleLeave = () => setPosition({ x: 0, y: 0 })

    el.addEventListener('mousemove', handleMove)
    el.addEventListener('mouseleave', handleLeave)
    return () => {
      el.removeEventListener('mousemove', handleMove)
      el.removeEventListener('mouseleave', handleLeave)
    }
  }, [reducedMotion, strength])

  if (reducedMotion) {
    return (
      <button
        ref={ref}
        className={'relative overflow-hidden rounded-xl px-8 py-4 font-semibold text-base transition-all ' + (className || '')}
        {...restProps}
      >
        <span className="relative z-10">{children}</span>
      </button>
    )
  }

  return (
    <motion.button
      ref={ref}
      className={'relative overflow-hidden rounded-xl px-8 py-4 font-semibold text-base transition-all ' + (className || '')}
      style={{
        transform: `translate(${position.x}px, ${position.y}px)`,
        willChange: 'transform',
      }}
      whileHover={{ scale: 1.02, boxShadow: '0 20px 40px -10px rgba(0, 229, 255, 0.4)' }}
      whileTap={{ scale: 0.98 }}
      type={restProps.type}
      disabled={restProps.disabled}
      onClick={restProps.onClick}
      form={restProps.form}
      formAction={restProps.formAction}
      formEncType={restProps.formEncType}
      formMethod={restProps.formMethod}
      formNoValidate={restProps.formNoValidate}
      formTarget={restProps.formTarget}
      name={restProps.name}
      value={restProps.value}
    >
      <span className="relative z-10">{children}</span>
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-violet-500 to-yellow-500 opacity-20 blur-xl"
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
      />
    </motion.button>
  )
}

export const MagneticButton = forwardRef<HTMLButtonElement, MagneticButtonProps>(MagneticButtonComponent)

MagneticButton.displayName = 'MagneticButton'