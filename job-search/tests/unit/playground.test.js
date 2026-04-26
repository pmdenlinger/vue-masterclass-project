import { describe, it, expect } from 'vitest'

import { evenOrOdd, multiply } from '@/playground'

describe('basic math', () => {
  it('adds two numbers', () => {
    expect(1 + 1).toBe(2)
  })
})

describe('evenOrOdd', () => {
  it('indicates the number is even', () => {
    expect(evenOrOdd(4)).toBe('Even')
  })
})

describe('multiply', () => {
  it('multiplies two numbers together', () => {
    expect(multiply(2, 3)).toBe(6)
  })
})
