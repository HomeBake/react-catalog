import React from 'react';
import classes from "./ItemCard.module.css";
import Button from "./UI/Button/Button";
import cartSvg from "../assets/svg/cart.svg";

const ItemCard = () => {
    return (
        <div className={classes.card}>
            <div className={classes.itemTitle}> Пальто, полупальто с подстежкой из натурального меха</div>
            <div className={classes.buySection}>
                <div className={classes.price}> 1 400$</div>
                <Button type={'rounded'}> <img src={cartSvg} alt={"+"}/>  </Button>
            </div>
            <Button type={'text'}>Подробнее -></Button>
        </div>
    );
};

export default ItemCard;