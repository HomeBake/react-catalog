import React from 'react';
import HeaderInfo from "./HeaderInfo";
import burgerSvg from '../assets/svg/burger.svg'
import searchSvg from '../assets/svg/search.svg'
import Button from "./UI/Button/Button";
import classes from './Header.module.css'
import Logo from "./Logo";

const Header = () => {
    return (
        <div className={classes.headerWrapper}>
            <HeaderInfo/>
            <div className={classes.headerBottom}>
                <img src={burgerSvg} alt={'Menu'}/>
                <Logo/>
                <Button type={'outline'}> <img style={{marginRight: '10px'}} src={searchSvg}></img>  Прайс-лист</Button>
            </div>
        </div>
    );
};

export default Header;