import React from 'react'
import styles from './OutlinedRoundedButton.module.css'

const OutlinedRoundedButton = (props: JSX.IntrinsicAttributes & React.ClassAttributes<HTMLButtonElement> & React.ButtonHTMLAttributes<HTMLButtonElement>) => {
	return (
		<button {...props} className={styles.button}>
			{props.children}
		</button>
	)
}

export default OutlinedRoundedButton