import React from 'react'
import classes from './Logo.module.css'

const Logo = () => {
	return (
		<div className={classes.logo}>
			<div className={classes.topLogo}> YOUR LOGO</div>
			<div className={classes.bottomLogo}> ADDITIONAL TEXT</div>
		</div>
	)
}

export default Logo