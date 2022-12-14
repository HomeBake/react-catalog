import React from 'react'
import classes from './ItemCard.module.css'
import Button from './UI/Button/Button'
import arrow from '../assets/svg/arrow.svg'
import {observer} from 'mobx-react'
import OrderCounter from './OrderCounter'
import {Item} from "../types/itemType";
import Card from "./Card";

interface Props {
	item: Item
}

const ItemCard = observer(({item}: Props) => {

	return (
		<Card>
			<div className={classes.itemTitle}> {item.title}</div>
			<div className={classes.buySection}>
				<div className={classes.price}> {item.price}₽</div>
				<div className={classes.buyButton}>
					<OrderCounter item={item}/>
				</div>
			</div>
			<Button types={'text'}>
				Подробнее <img style={{transform: 'rotate(90deg)', paddingLeft: '5px'}} src={arrow} alt={'->'}/>
			</Button>
		</Card>
	)
})

export default ItemCard