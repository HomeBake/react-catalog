import React from 'react'
import styles from './RoundedButton.module.css'

const RoundedButton = (props: JSX.IntrinsicAttributes & React.ClassAttributes<HTMLButtonElement> & React.ButtonHTMLAttributes<HTMLButtonElement>) => {
	return (
		<button {...props} className={styles.button}>
			{props.children}
		</button>
	)
}

export default RoundedButton