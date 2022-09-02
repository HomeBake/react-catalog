import React from 'react'
import styles from './SubmitButton.module.css'

const SubmitButton = (props: JSX.IntrinsicAttributes & React.ClassAttributes<HTMLButtonElement> & React.ButtonHTMLAttributes<HTMLButtonElement>) => {
	return (
		<button {...props} className={styles.button}>
			{props.children}
		</button>
	)
}

export default SubmitButton