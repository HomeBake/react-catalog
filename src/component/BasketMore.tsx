import React, {useContext} from 'react'
import classes from './BasketMore.module.css'
import Button from './UI/Button/Button'
import {Context} from './ContextProvider'
import BasketItem from './BasketItem'
import {observer} from 'mobx-react'


const BasketMore = observer(() => {
	const {basketStore, itemStore} = useContext(Context)
	const basket = basketStore.basket
	return (
		<div className={classes.basketMore}>
			<div>
				{basket.map((basketItem) => {
					const item = itemStore.getById(basketItem.id)
					return item ? <BasketItem key={item.id} item={item}/> : <div> Такого товара нет! </div>
				})}
			</div>
			<div className={classes.button}>
				<Button> Оформить заказ </Button>
			</div>
		</div>
	)
})

export default BasketMore