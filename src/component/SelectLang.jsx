import React, {useState} from 'react';
import classes from "./HeaderInfo.module.css";
import Select from "./UI/Select/Select";

const SelectLang = ({menu}) => {
    const [selectedItem,setSelectedItem] = useState('ENG')
    return (
        <Select
            selectedItem={selectedItem}
            menuItems={menu}
            setSelectedItem={setSelectedItem}
            className={classes.lang}
        />
    );
};

export default SelectLang;