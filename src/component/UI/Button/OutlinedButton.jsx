import React from 'react'
import styles from './OutlinedButton.module.css'

const OutlinedButton = (props) => {
	return (
		<button {...props} className={styles.button}>
			<div className={styles.buttonChildren}>
				{props.children}
			</div>
		</button>
	)
}

export default OutlinedButton