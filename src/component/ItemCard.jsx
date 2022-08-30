import React from 'react';
import classes from "./ItemCard.module.css";
import Button from "./UI/Button/Button";
import cartSvg from "../assets/svg/cart.svg";
import arrow from '../assets/svg/arrow.svg'

const ItemCard = ({item}) => {
    return (
        <div className={classes.card}>
            <div className={classes.itemTitle}> {item.title}</div>
            <div className={classes.buySection}>
                <div className={classes.price}> {item.price}$</div>
                <Button type={'rounded'}> <img src={cartSvg} alt={"+"}/>  </Button>
            </div>
            <Button type={'text'}>Подробнее <img style={{transform: "rotate(90deg)", paddingLeft: '5px' }} src={arrow} alt={'->'}/></Button>
        </div>
    );
};

export default ItemCard;