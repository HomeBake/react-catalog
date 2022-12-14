import React, {useContext, useEffect, useState} from 'react'
import Search from './UI/Input/Search'
import ItemCard from './ItemCard'
import classes from './Content.module.css'
import SideBar from './SideBar'
import {Context} from './ContextProvider'
import {observer} from 'mobx-react'
import Basket from './Basket'
import Card from "./Card";


const description = 'Из-за ежедневного использования повседневная одежда быстро изнашивается и нуждается в профессиональном уходе.' +
	' То, что чаще носится, должно и чаще чиститься!' +
	' Подбирать для повседневной одежды правильные программы обработки – это задача профессионалов.'

const Content = observer(() => {
	const {itemStore, categoryStore} = useContext(Context)
	const [search, setSearch] = useState(itemStore.itemSearch)

	useEffect(()=> {
		itemStore.setItemSearch(search)
		console.log(search)
	}, [search])
	const itemInfo = itemStore.getItemNyFilters(categoryStore.selectedCategory, categoryStore.selectedOption)
	return (
		<div className={classes.content}>
			<SideBar/>
			<div className={classes.items}>
				<div className={classes.search}>
					<Search value={search} setValue={setSearch} placeholder={'Поиск'}/>
				</div>
				<div className={classes.description}>
					{description}
				</div>
				<div>
					{itemInfo.length !== 0 ? itemInfo.map((item) => {
						return <ItemCard
							key={item.id}
							item={item}
						/>
					}) :
					<Card>
						<div className={classes.noItems}> Такого товара нет! </div>
					</Card>
					}
				</div>

			</div>
			<Basket/>
		</div>

	)
})

export default Content