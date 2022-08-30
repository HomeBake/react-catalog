import React, {useState} from 'react';
import Search from "./UI/Input/Search";
import Button from "./UI/Button/Button";
import cartSvg from '../assets/svg/cart.svg'
import ItemCard from "./ItemCard";
import classes from "./Content.module.css"
import SideBar from "./SideBar";


const itemInfo1 = [
    {id: 1, title: 'Пальто, полупальто с подстежкой из натурального меха', price: 1400},
    {id: 2, title: 'Пиджак', price: 20},
    {id: 3, title: 'Пиджак натуральный шелк', price: 123},
    {id: 4, title: 'Пиджак с коротким рукавом без подклада', price: 12312321},
    {id: 5, title: 'Пиджак натуральный шёлк с коротким рукавом', price: 210}
]

const itemInfo2 = [
    {id: 1, title: 'Пальто, полупальто с подстежкой из натурального меха', price: 1400},
    {id: 2, title: 'Пальто, полупальто с подстежкой из натурального меха', price: 1400},
    {id: 3, title: 'Пальто, полупальто с подстежкой из натурального меха', price: 1400},
    {id: 4, title: 'Пальто, полупальто с подстежкой из натурального меха', price: 1400},
    {id: 5, title: 'Пальто, полупальто с подстежкой из натурального меха', price: 1400}
]


const Content = () => {
    return (
        <div className={classes.content}>
             <SideBar/>
            <div className={classes.items}>
                <div className={classes.search}>
                    <Search placeholder={"Поиск"}/>
                </div>
                <div className={classes.description}> Из-за ежедневного использования повседневная одежда быстро изнашивается и нуждается в профессиональном уходе. То, что чаще носится, должно и чаще чиститься! Подбирать для повседневной одежды правильные программы обработки – это задача профессионалов.</div>
                <div className={classes.itemsList}>
                    {itemInfo1.map((item) => {
                        return <ItemCard
                            key={item.id}
                            item={item}
                        />
                    })}

                </div>
            </div>
        </div>
    );
};

export default Content;