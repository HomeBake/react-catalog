import React, {CSSProperties} from 'react'
import classes from './CounterButton.module.css'

interface Props {
	count: number
	onMinus: () => void
	onPlus: () => void
	styles?: CSSProperties
}

const CounterButton = ({count, onMinus, onPlus, styles}: Props) => {

	return (
		<div className={classes.button} style={styles}>
			<div
				className={classes.buttonChange}
				onClick={() => {
					if (count > 0) {
						onMinus()
					}
				}
				}
			>
				-
			</div>
			{count}
			<div
				className={classes.buttonChange}
				onClick={() => {
					onPlus()
				}}
			>
				+
			</div>
		</div>
	)
}

export default CounterButton