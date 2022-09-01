import React, {useEffect, useState, useContext} from 'react';
import classes from "./ItemCard.module.css";
import Button from "./UI/Button/Button";
import cartSvg from "../assets/svg/cart.svg";
import arrow from '../assets/svg/arrow.svg'
import {Context} from "./ContextProvider";

const ItemCard = ({item}) => {
    const {basketStore, categoryStore} = useContext(Context)
    const [orderCount, setOrderCount] = useState(0)

    function basketPlus() {
        basketStore.setBasket(item.id, orderCount + 1, item.price,categoryStore.selectedCategory)
        basketStore.plusBasket(item.price)
    }

    function basketMinus() {
        basketStore.setBasket(item.id, orderCount - 1, item.price,categoryStore.selectedCategory)
        basketStore.minusBasket(item.price)
    }

    return (
        <div className={classes.card}>
            <div className={classes.itemTitle}> {item.title}</div>
            <div className={classes.buySection}>
                <div className={classes.price}> {item.price}$</div>
                {
                    orderCount === 0 ?
                        <Button
                            onClick={() => {
                                setOrderCount(1)
                                basketPlus()
                            }}
                            type={'rounded'}
                        >
                            <img src={cartSvg} alt={"+"}/>
                        </Button> :
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
                }

            </div>
            <Button type={'text'}>Подробнее <img style={{transform: "rotate(90deg)", paddingLeft: '5px' }} src={arrow} alt={'->'}/></Button>
        </div>
    );
};

export default ItemCard;