import React from 'react'
import styles from './TextButton.module.css'

const TextButton = (props: JSX.IntrinsicAttributes & React.ClassAttributes<HTMLButtonElement> & React.ButtonHTMLAttributes<HTMLButtonElement>) => {
	return (
		<button {...props} className={styles.button}>
			{props.children}
		</button>
	)
}

export default TextButton