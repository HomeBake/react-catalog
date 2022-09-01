import React, {useContext} from 'react'
import classes from './MenuOption.module.css'
import semiArrow from '../assets/svg/semiArrow.svg'
import {Context} from './ContextProvider'
import {observer} from 'mobx-react'

const MenuOption = observer(({category}) => {
	const {categoryStore} = useContext(Context)
	const activeMenu = categoryStore.activeCat
	const activeOption = categoryStore.selectedOption
	return <>
		<div className={activeMenu === category.id ? classes.menuItemActive + ' ' + classes.menuItem : classes.menuItem}
			onClick={() => {
				if (activeMenu === category.id) {
					categoryStore.setActiveCat(0)
				} else {
					categoryStore.setSelectedCategory(category.id)
					categoryStore.setActiveCat(category.id)
					categoryStore.setSelectedOption(0)
				}
			}}>
			{category.title} {activeMenu === category.id ? <img className={classes.arrow} src={semiArrow} alt={'+'}/> :
				<img className={classes.arrow} style={{transform: 'rotate(180deg)',}} src={semiArrow} alt={'+'}/>}
		</div>
		{activeMenu === category.id &&
			category.options.map((option, key) => {
				return <div
					key={key}
					className={activeOption === option.id ? classes.activeOption : classes.option}
					onClick={() => {
						categoryStore.setSelectedOption(option.id)
					}}>
					{option.title}
				</div>
			})
		}
	</>
})

export default MenuOption