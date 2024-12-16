import { describe, it, expect } from 'bun:test'
import { renderHook, act } from '@testing-library/react-hooks'
import { useCounter } from '../src/lib/useCounter'

describe('useCounter', () => {
	it('should initialize counter with default value', () => {
		const { result } = renderHook(() => useCounter())
		expect(result.current.count).toBe(0)
	})

	it('should initialize counter with provided value', () => {
		const { result } = renderHook(() => useCounter(10))
		expect(result.current.count).toBe(10)
	})

	it('should increment counter', () => {
		const { result } = renderHook(() => useCounter())
		act(() => {
			result.current.increment()
		})
		expect(result.current.count).toBe(1)
	})

	it('should decrement counter', () => {
		const { result } = renderHook(() => useCounter(1))
		act(() => {
			result.current.decrement()
		})
		expect(result.current.count).toBe(0)
	})

	it('should reset counter', () => {
		const { result } = renderHook(() => useCounter(5))
		act(() => {
			result.current.increment()
			result.current.reset()
		})
		expect(result.current.count).toBe(5)
	})
})
