import React, {useContext} from 'react'
import Search from './UI/Input/Search'
import ItemCard from './ItemCard'
import classes from './Content.module.css'
import SideBar from './SideBar'
import {Context} from './ContextProvider'
import {observer} from 'mobx-react'
import Basket from './Basket'

const description = 'Из-за ежедневного использования повседневная одежда быстро изнашивается и нуждается в профессиональном уходе.' +
	' То, что чаще носится, должно и чаще чиститься!' +
	' Подбирать для повседневной одежды правильные программы обработки – это задача профессионалов.'

const Content = observer(() => {

	const {itemStore, categoryStore} = useContext(Context)
	const itemInfo = itemStore.getByCategory(categoryStore.selectedCategory)
	return (
		<div className={classes.content}>
			<SideBar/>
			<div className={classes.items}>
				<div className={classes.search}>
					<Search placeholder={'Поиск'}/>
				</div>
				<div className={classes.description}>
					{description}
				</div>
				<div className={classes.itemsList}>
					{itemInfo.map((item) => {
						return <ItemCard
							key={item.id}
							item={item}
						/>
					})}
				</div>

			</div>
			<Basket/>
		</div>

	)
})

export default Content