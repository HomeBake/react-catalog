import React, {CSSProperties, useContext} from 'react'
import {Context} from './ContextProvider'
import Button from './UI/Button/Button'
import cartSvg from '../assets/svg/cart.svg'
import {observer} from 'mobx-react'
import {Item} from "../types/itemType";

interface Props {
	item: Item
	styles?: CSSProperties
}

const OrderCounter = observer(({item, styles}: Props) => {
	const {basketStore} = useContext(Context)

	let orderCount = basketStore.getAmountById(item.id) || 0


	function basketPlus() {
		basketStore.plusItem(item.id, item.price)

	}

	function basketMinus() {
		basketStore.minusItem(item.id, item.price)
	}

	return (
		<div>
			{orderCount === 0 ?
				<Button
					onClick={() => {
						basketPlus()
					}}
					types={'rounded'}
				>
					<img src={cartSvg} alt={'+'}/>
				</Button> :
				<Button
					styles={styles}
					types={'counter'}
					count={orderCount}
					onMinus={() => {
						basketMinus()
					}}
					onPlus={() => {
						basketPlus()
					}}
				/>}
		</div>
	)
})

export default OrderCounter