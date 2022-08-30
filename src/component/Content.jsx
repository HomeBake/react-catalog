import React from 'react';
import Search from "./UI/Input/Search";
import Button from "./UI/Button/Button";
import cartSvg from '../assets/svg/cart.svg'
import ItemCard from "./ItemCard";
import classes from "./Content.module.css"

const Content = () => {
    return (
        <div className={classes.content}>
             <div className={classes.sidebar}>
                <div className="title">Услуги</div>
                 <div className="specification">
                     <div className="specification-item">Аксессуары</div>
                     <div className="specification-item">Верхняя одежда</div>
                     <div className="specification-item">Деловой костюм</div>
                     <div className="specification-item">Джинса</div>
                     <div className="specification-item">Куртка и пуховик</div>
                 </div>
             </div>
            <div className={classes.items}>
                <div className={classes.search}>
                    <Search placeholder={"Поиск"}/>
                </div>
                <div className={classes.description}> Из-за ежедневного использования повседневная одежда быстро изнашивается и нуждается в профессиональном уходе. То, что чаще носится, должно и чаще чиститься! Подбирать для повседневной одежды правильные программы обработки – это задача профессионалов.</div>
                <div className={classes.itemsList}>
                    <ItemCard/>
                    <ItemCard/>
                    <ItemCard/>
                    <ItemCard/>
                </div>
            </div>
        </div>
    );
};

export default Content;