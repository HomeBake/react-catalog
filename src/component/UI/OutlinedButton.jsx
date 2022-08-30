import React from 'react';
import styles from './OutlinedButton.module.css'

const OutlinedButton = (props) => {
    return (
        <button {...props} className={styles.button}>
            {props.children}
        </button>
    );
};

export default OutlinedButton;