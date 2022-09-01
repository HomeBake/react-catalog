import React, {useState} from 'react';
import classes from './Select.module.css'
import useToggle from "../../../hooks/useToggle";
import semiArrow from "../../../assets/svg/semiArrow.svg";

const Select = ({selectedItem, setSelectedItem, menuItems, className}) => {
    const [isActive, toggleActive] = useToggle(false)

    return (
        <div
            className={classes.dropdown + ' ' + className}
            style={isActive ? {boxShadow: "0 0 4px #FFFFFF"} : {}}
            onMouseLeave={ () => isActive && toggleActive()}
        >
            <div className={classes.dropDownItem} onClick={() => {
                toggleActive()
            }}>
                {selectedItem} {isActive ? <img className={classes.arrow} src={semiArrow} alt={"+"}/> : <img className={classes.arrow} style={{transform: "rotate(180deg)",}} src={semiArrow} alt={"+"}/>}
            </div>
            {
                isActive && menuItems.map((item,key)=> {
                    if (item !== selectedItem) {
                        return <div
                            className={classes.dropDownItem}
                            style={{borderTop: '1px solid #016DA6'}}
                            key={key}
                            onClick={ ()=> {
                                setSelectedItem(item)
                                toggleActive()
                            }
                            }
                        >
                            {item}
                        </div>
                    }
                })
            }
        </div>
    );
};

export default Select;