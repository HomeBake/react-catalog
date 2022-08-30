import React from 'react';
import useToggle from "../hooks/useToggle";
import MenuOption from "./MenuOption";
import {useState} from "react";
import classes from "./Menu.module.css";

const Menu = ({menu, className}) => {
    const [activeMenu, setActiveMenu] = useState(0)
    const [activeOption, setActiveOption] = useState('')
    return (
        <div className={className + ' ' + classes.menu}>
            {menu.map((item, key) => {
                return <MenuOption
                    key={key}
                    activeMenu={activeMenu}
                    setActiveMenu={setActiveMenu}
                    item={item}
                    activeOption={activeOption}
                    setActiveOption={setActiveOption}/>
            })}
        </div>
    );
};

export default Menu;