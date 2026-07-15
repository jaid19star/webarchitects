import { forwardRef, type HTMLAttributes } from 'react'
import { cn } from '@/lib/utils'

interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: 'default' | 'primary' | 'success' | 'warning' | 'error'
  size?: 'sm' | 'md' | 'lg'
}

export const Badge = forwardRef<HTMLSpanElement, BadgeProps>(
  ({ className, variant = 'default', size = 'md', children, ...props }, ref) => {
    const variants = {
      default: 'badge',
      primary: 'badge-primary',
      success: 'badge text-green-400 bg-green-900/30 border border-green-500/20',
      warning: 'badge text-amber-400 bg-amber-900/30 border border-amber-500/20',
      error: 'badge text-red-400 bg-red-900/30 border border-red-500/20',
    }

    const sizes = {
      sm: 'px-2 py-0.5 text-[10px]',
      md: 'px-3 py-1 text-[11px]',
      lg: 'px-4 py-1.5 text-[12px]',
    }

    return (
      <span
        ref={ref}
        className={cn(
          'inline-flex items-center font-medium',
          variants[variant],
          sizes[size],
          className
        )}
        {...props}
      >
        {children}
      </span>
    )
  }
)

Badge.displayName = 'Badge'