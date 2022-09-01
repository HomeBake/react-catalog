import React from 'react'
import styles from './SubmitButton.module.css'

const SubmitButton = (props) => {
	return (
		<button {...props} className={styles.button}>
			{props.children}
		</button>
	)
}

export default SubmitButton