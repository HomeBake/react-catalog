import React, {useContext} from 'react'
import classes from './Basket.module.css'
import BasketSmall from './BasketSmall'
import useToggle from '../hooks/useToggle'
import BasketMore from './BasketMore'
import {Context} from './ContextProvider'
import {observer} from 'mobx-react'

const Basket = observer(() => {
	const {basketStore} = useContext(Context)
	const [isActive, toggleActive] = useToggle(0)
	let basketClass
	if (isActive) {
		basketClass = classes.basketActive + ' ' + classes.basket
	} else basketClass = classes.basket

	return basketStore.basket.length === 0 ? <></> :
		<>
			{isActive && <div onClick={() => toggleActive()} className={classes.fade}></div>}
			<div className={basketClass}>
				<BasketSmall isActive={isActive} toggleActive={toggleActive}/>
				{isActive && <BasketMore toggleActive={toggleActive}/>}
			</div>
		</>


})

export default Basket