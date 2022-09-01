import React, {useContext} from 'react';
import classes from "./MenuOption.module.css";
import semiArrow from "../assets/svg/semiArrow.svg";
import {Context} from "./ContextProvider";
import {observer} from "mobx-react";

const MenuOption = observer(({item}) => {
    const {categoryStore} = useContext(Context)
    const activeMenu = categoryStore.selectedCategory
    const activeOption = categoryStore.selectedOption
    return <>
        <div className={ activeMenu === item.id ? classes.menuItemActive + ' ' +  classes.menuItem : classes.menuItem}
             onClick={() => {
                if (activeMenu === item.id) {
                    categoryStore.setSelectedCategory(0)
                }
                else {
                    categoryStore.setSelectedCategory(item.id)
                }
        }}>
            {item.title} {activeMenu === item.id ? <img src={semiArrow} alt={"+"}/> : <img style={{transform: "rotate(180deg)"}} src={semiArrow} alt={"+"}/>}
        </div>
        {activeMenu ===  item.id &&
            item.options.map((option, key) => {
                return <div
                        key={key}
                        className={ activeOption === option.id ? classes.activeOption : classes.option}
                        onClick={ ()=> {
                            categoryStore.setSelectedOption(option.id)
                    }}>
                    {option.title}
                </div>
            })
        }
    </>
});

export default MenuOption;