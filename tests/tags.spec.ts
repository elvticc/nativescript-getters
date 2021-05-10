import { describe, test, expect } from '@jest/globals'

describe('Tests description', () => {
  test('Test 1', () => {
    expect('test-1').toBeTruthy()
  })

  test('Test 2', () => {
    expect('test-2').toBeTruthy()
  })
})
