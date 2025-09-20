import { sum, shouldReturnAMessageCorrectly } from '..'

describe('example-app-1', () => {
  it('should sum two numbers', () => {
    const sut = sum(1, 2)
    expect(sut).toBe(3)
  })

  it('should return a message correctly', () => {
    const sut = shouldReturnAMessageCorrectly()
    expect(sut).toBe('This is an example of a shared module 1')
  })
})
