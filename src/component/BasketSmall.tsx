import React, {useContext} from 'react'
import classes from './BasketSmall.module.css'
import Button from './UI/Button/Button'
import arrow from '../assets/svg/arrow.svg'
import {Context} from './ContextProvider'

interface Props {
	isActive: boolean
	toggleActive: () => {}
}

const Basket = ({isActive, toggleActive}: Props) => {
	const stores = useContext(Context)
	const img = isActive ?
		<img style={{transform: 'rotate(180deg)'}} src={arrow} alt={' /| \n|'}/> :
		<img src={arrow} alt={' /| \n|'}/>
	return (
		<div className={classes.basket}>
			<div className={classes.infoWrapper}>
				<div className={classes.title}>
					Корзина
				</div>
				<div className={classes.text}>
					<div>
						Количество услуг в корзине
					</div>
					<div className={classes.digits}>
						{stores && stores.basketStore.basketAmount}
					</div>
				</div>
				<div className={classes.text}>
					<div>
						Сумма заказа
					</div>
					<div className={classes.digits}>
						{stores && stores.basketStore.basketPrice}₽
					</div>
				</div>
			</div>
			<div className={classes.button}>
				<Button onClick={() => toggleActive()} types={'outlinedRounded'}> {img}  </Button>
			</div>
		</div>
	)
}

export default Basket