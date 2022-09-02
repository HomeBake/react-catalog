import React from 'react'
import HeaderInfo from './HeaderInfo'
import burgerSvg from '../assets/svg/burger.svg'
import searchSvg from '../assets/svg/search.svg'
import Button from './UI/Button/Button'
import classes from './Header.module.css'
import Logo from './Logo'

const Header = () => {
	return (
		<div className={classes.headerWrapper}>
			<HeaderInfo/>
			<div className={classes.headerBottom}>
				<img src={burgerSvg} alt={'Menu'}/>
				<div className={classes.logo}><Logo/></div>
				<Button types={'outline'}> <img style={{marginRight: '10px'}} src={searchSvg} alt={'/0'}></img> Прайс-лист</Button>
			</div>
		</div>
	)
}

export default Header