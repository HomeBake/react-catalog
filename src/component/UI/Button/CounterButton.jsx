import React from 'react'
import classes from './CounterButton.module.css'

const CounterButton = ({count, onMinus, onPlus, styles}) => {

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