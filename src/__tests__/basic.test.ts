import { describe, it, expect } from 'vitest'

describe('Basic tests', () => {
  it('should pass', () => {
    expect(true).toBe(true)
  })

  it('should handle basic math', () => {
    expect(2 + 2).toBe(4)
  })
})