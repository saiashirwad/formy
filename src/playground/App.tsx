import React from 'react'
import { useCounter } from '../lib/useCounter'

export function App() {
	const { count, increment, decrement, reset } = useCounter(0)

	return (
		<div>
			<h1>Counter: {count}</h1>
			<button onClick={increment}>Increment</button>
			<button onClick={decrement}>Decrement</button>
			<button onClick={reset}>Reset</button>
		</div>
	)
}
