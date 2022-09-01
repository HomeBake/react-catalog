import React, {useContext} from 'react';
import classes from "./BasketMore.module.css";
import Button from "./UI/Button/Button";
import {Context} from "./ContextProvider";
import {useState} from "@types/react";

const BasketMore = () => {
    const basket = basketStore.basket
    return (
        <div className={classes.basketMore}>
            <div className={classes.itemList}>
                {basket.map((basketItem) => {
                    const item = itemStore.getById(basketItem.id)
                    return  <div className={classes.item}>
                        <div className={classes.itemTitle}>
                            {item.title}
                        </div>
                        <div className={classes.itemInfo}>
                            <div className={classes.itemPrice}>
                                {item.price}
                            </div>
                            <div className={classes.itemButton}>
                                <Button
                                    type={'counter'}
                                    count={orderCount}
                                    onMinus={() => {
                                        basketMinus()
                                    }
                                    }
                                    onPlus={() => {
                                        basketPlus()}
                                    }
                                    setOrderCount={setOrderCount}
                                />
                            </div>
                        </div>
                    </div>
                })}
            </div>
            <div className={classes.button}>
                <Button> Оформить заказ </Button>
            </div>
        </div>
    );
};

export default BasketMore;