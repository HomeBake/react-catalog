import React from 'react';
import Select from "./UI/Select/Select";
import {useState} from "react";
import {socialMediaList} from '../utils/socialMediaList'
import SocialMedia from "./SocialMedia";
import classes from "./Footer.module.css";


const phone = "+(373) 22 83-87-87"
const menuItems = ['RU', 'ENG', 'MOL']

const Footer = () => {

    const [selectedItem,setSelectedItem] = useState('ENG')

    return (
        <div className={classes.footer}>
            <div className={classes.contact}>
                <div className={classes.phone}>
                    {phone}
                </div>
                <div className={classes.socialMedia}>
                    {socialMediaList.map((media)=> {
                        return <SocialMedia
                            className={classes.media}
                            svg = {media.svg}
                            alt={media.alt}
                            link={media.link}
                        />
                    })}
                </div>
            </div>
            <Select
                selectedItem={selectedItem}
                menuItems={menuItems}
                setSelectedItem={setSelectedItem}
                className={classes.lang}
            />
        </div>
    );
};

export default Footer;