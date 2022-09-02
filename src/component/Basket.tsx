import React, {useContext} from 'react'
import classes from './Basket.module.css'
import BasketSmall from './BasketSmall'
import useToggle from '../hooks/useToggle'
import BasketMore from './BasketMore'
import {Context} from './ContextProvider'
import {observer} from 'mobx-react'

const Basket = observer(() => {
	const stores = useContext(Context)
	const [isActive, toggleActive] = useToggle(false)
	let basketClass
	if (isActive) {
		basketClass = classes.basketActive + ' ' + classes.basket
	} else basketClass = classes.basket

	return  stores && stores.basketStore.basket.length === 0 ? <></> :
		<>
			{isActive && <div onClick={() => toggleActive()} className={classes.fade}></div>}
			<div className={basketClass}>
				<BasketSmall isActive={isActive} toggleActive={toggleActive}/>
				{isActive && <BasketMore/>}
			</div>
		</>


})

export default Basket