import React from 'react'
import OutlinedButton from './OutlinedButton'
import CounterButton from './CounterButton'
import RoundedButton from './RoundedButton'
import SubmitButton from './SubmitButton'
import TextButton from './TextButton'
import './Button.css'
import OutlinedRoundedButton from './OutlinedRoundedButton'

interface ButtonProps  {
	types?: 'outline' | 'counter' | 'rounded' | 'text' | 'outlinedRounded'
	styles?: React.CSSProperties
	count?: number
	onMinus?: () => void
	onPlus?: () => void
}

const Button = (props: ButtonProps & JSX.IntrinsicAttributes & React.ClassAttributes<HTMLButtonElement> & React.ButtonHTMLAttributes<HTMLButtonElement>) => {
	let button = <SubmitButton {...props}> {props.children} </SubmitButton>
	switch (props.types) {
	case 'outline' :
		button = <OutlinedButton {...props}> {props.children} </OutlinedButton>
		break
	case 'counter' :
		if (props.count && props.onMinus && props.onPlus) {
			button = <CounterButton {...props}
									styles={props.styles}
									count={props.count}
									onMinus={props.onMinus}
									onPlus={props.onPlus}
			/>
		}
		break
	case 'rounded' :
		button = <RoundedButton {...props}> {props.children} </RoundedButton>
		break
	case 'text' :
		button = <TextButton {...props}> {props.children} </TextButton>
		break
	case 'outlinedRounded' :
		button = <OutlinedRoundedButton {...props}> {props.children}</OutlinedRoundedButton>
		break
	}


	return (
		<>
			{button}
		</>
	)
}

export default Button