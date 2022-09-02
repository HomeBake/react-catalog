import React, {useContext} from 'react'
import classes from './BasketItem.module.css'
import OrderCounter from './OrderCounter'
import closeSvg from '../assets/svg/eraser.svg'
import {Context} from './ContextProvider'
import {Item} from "../types/itemType";

interface Props {
	item: Item
}

const BasketItem = ({item}: Props) => {
	const {basketStore, categoryStore} = useContext(Context)

	const amount = basketStore.getAmountById(item.id)
	return (
		<>
			<div className={classes.itemType}> {categoryStore.getTitleById(item.type)} </div>
			<div className={classes.item}>
				<div className={classes.deleteItem} onClick={() => {
					basketStore.deleteById(item.id)
				}}><img src={closeSvg} alt={'x'}/></div>
				<div className={classes.itemInfo}>
					<div className={classes.itemTitle}>
						{item.title}
					</div>
					<div className={classes.itemPrice}>
						{amount ? item.price * amount : 0}₽
					</div>
				</div>
				<div className={classes.itemButton}>
					<OrderCounter styles={{width: '67px', height: '26px'}} item={item}/>
				</div>
			</div>
		</>
	)
}

export default BasketItem