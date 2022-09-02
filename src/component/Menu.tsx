import React, {useContext} from 'react'
import MenuOption from './MenuOption'
import classes from './Menu.module.css'
import {Context} from './ContextProvider'
import {observer} from 'mobx-react'

const Menu = observer(() => {
	const {categoryStore} = useContext(Context)
	const categories = categoryStore.categories
	return (
		<div className={classes.menu}>
			{categories.map((item, key) => {
				return <MenuOption
					key={key}
					category={item}
				/>
			})}
		</div>
	)
})

export default Menu