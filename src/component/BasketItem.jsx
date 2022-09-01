import React, {useContext} from 'react';
import classes from "./BasketItem.module.css";
import OrderCounter from "./OrderCounter";
import closeSvg from '../assets/svg/eraser.svg'
import {Context} from "./ContextProvider";

const BasketItem = ({item}) => {
    const {basketStore, categoryStore} = useContext(Context)
    return (
        <>
            <div className={classes.itemType}> {categoryStore.getTitleById(item.type)} </div>
            <div className={classes.item}>
                <div className={classes.deleteItem} onClick={() => {
                    basketStore.deleteById(item.id)
                }}> <img src={closeSvg} alt={'x'}/> </div>
                <div className={classes.itemInfo}>
                    <div className={classes.itemTitle}>
                        {item.title}
                    </div>
                    <div className={classes.itemPrice}>
                        {item.price * basketStore.getAmountById(item.id)}$
                    </div>
                </div>
                <div className={classes.itemButton}>
                    <OrderCounter styles={{width: '67px', height:'26px'}} item={item}/>
                </div>
            </div>
        </>
    );
};

export default BasketItem;