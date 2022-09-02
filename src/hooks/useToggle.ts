import {useState} from 'react'

export default function useToggle(initialState: boolean) {
	const [state, setState] = useState(initialState)

	const toggle: any = () => {
		setState(!state)
	}

	return [
		state, toggle
	]
}