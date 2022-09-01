import React from 'react'
import styles from './RoundedButton.module.css'

const RoundedButton = (props) => {
	return (
		<button {...props} className={styles.button}>
			{props.children}
		</button>
	)
}

export default RoundedButton