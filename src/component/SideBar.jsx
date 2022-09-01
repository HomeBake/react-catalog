import React from 'react';
import classes from "./SideBar.module.css";
import Menu from "./Menu";



const SideBar = () => {
    return (
        <div className={classes.sidebar}>
            <div className={classes.title}>Услуги</div>
            <Menu/>
        </div>
    );
};

export default SideBar;