import React, {useState} from 'react';
import classes from "./MenuOption.module.css";
import semiArrow from "../assets/svg/semiArrow.svg";

const MenuOption = ({item, activeMenu, setActiveMenu,activeOption, setActiveOption}) => {
    return <>
        <div className={ activeMenu === item.id ? classes.menuItemActive + ' ' +  classes.menuItem : classes.menuItem}
             onClick={() => {
                if (activeMenu === item.id) {
                    setActiveMenu(0)
                }
                else {
                    setActiveMenu(item.id)
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
                        setActiveOption(option.id)
                    }}>
                    {option.title}
                </div>
            })
        }
    </>
};

export default MenuOption;