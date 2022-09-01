import React, {useEffect, useState, useContext} from 'react';
import classes from "./ItemCard.module.css";
import Button from "./UI/Button/Button";
import cartSvg from "../assets/svg/cart.svg";
import arrow from '../assets/svg/arrow.svg'
import {Context} from "./ContextProvider";
import {observer} from "mobx-react";
import OrderCounter from "./OrderCounter";

const ItemCard = observer(({item}) => {

    return (
        <div className={classes.card}>
            <div className={classes.itemTitle}> {item.title}</div>
            <div className={classes.buySection}>
                <div className={classes.price}> {item.price}₽</div>
                <div className={classes.buyButton}>
                    <OrderCounter item={item}/>
                </div>
            </div>
            <Button type={'text'}>Подробнее <img style={{transform: "rotate(90deg)", paddingLeft: '5px' }} src={arrow} alt={'->'}/></Button>
        </div>
    );
});

export default ItemCard;