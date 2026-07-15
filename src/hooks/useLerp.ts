import { useRef, useEffect, useState } from 'react'

export function useLerp<T extends number | number[]>(
  target: T,
  speed = 0.1
): T {
  const valueRef = useRef<T>(Array.isArray(target) ? [...target] as T : target)
  const [value, setValue] = useState<T>(Array.isArray(target) ? [...target] as T : target)

  useEffect(() => {
    let frame: number
    const animate = () => {
      const current = valueRef.current
      let next: T
      if (Array.isArray(current) && Array.isArray(target)) {
        next = current.map((c, i) => c + (target[i] - c) * speed) as T
      } else if (typeof current === 'number' && typeof target === 'number') {
        next = (current + (target - current) * speed) as T
      } else {
        next = target
      }
      valueRef.current = next
      setValue(next)
      frame = requestAnimationFrame(animate)
    }
    animate()
    return () => cancelAnimationFrame(frame)
  }, [target, speed])

  return value
}