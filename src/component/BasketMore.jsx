import React, {useContext} from 'react';
import classes from "./BasketMore.module.css";
import Button from "./UI/Button/Button";
import {Context} from "./ContextProvider";
import BasketItem from "./BasketItem";
import {observer} from "mobx-react";


const BasketMore = observer(({toggleActive}) => {
    const {itemStore, basketStore} = useContext(Context)
    const basket = basketStore.basket
    return (

        <div className={classes.basketMore}>
            <div className={classes.itemList}>
                {basket.map((basketItem) => {
                    const item = itemStore.getById(basketItem.id)
                    return  <BasketItem key={item.id} item={item} amount={basketItem.amount}/>
                })}
            </div>
            <div className={classes.button}>
                <Button> Оформить заказ </Button>
            </div>
            <div onClick={() => toggleActive()} className={classes.fade}></div>
        </div>
    );
});

export default BasketMore;