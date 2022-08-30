import React, {useState} from 'react';
import classes from './Select.module.css'
import useToggle from "../../../hooks/useToggle";

const Select = ({selectedItem, setSelectedItem,menuItems}) => {
    const [isActive, toggleActive] = useToggle(false)

    return (
        <div className={classes.dropdown}>
            <div className={classes.dropDownItem} onClick={() => {
                toggleActive()
            }}>
                {selectedItem}
            </div>
            {

                isActive && menuItems.map((item,key)=> {
                    if (item !== selectedItem) {
                        return <div
                            className={classes.dropDownItem}
                            style={{borderTop: '1px solid #016DA6'}}
                            key={key}
                            onClick={(e)=> {
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