import React, {useState} from 'react';
import classes from "./Basket.module.css";
import BasketSmall from "./BasketSmall";
import useToggle from "../hooks/useToggle";
import BasketMore from "./BasketMore";

const Basket = () => {
    const [isActive, toggleActive] = useToggle(0)
    let basketClass
    if (isActive) {
        basketClass = classes.basketActive + ' ' + classes.basket
    }
    else basketClass = classes.basket

    return (
        <div className={basketClass}>
            <BasketSmall isActive={isActive} toggleActive={toggleActive}/>
            {isActive ? <BasketMore></BasketMore> : ""}
        </div>
    );
};

export default Basket;