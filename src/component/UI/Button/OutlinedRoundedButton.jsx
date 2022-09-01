import React from 'react';
import styles from "./OutlinedRoundedButton.module.css";

const OutlinedRoundedButton = (props) => {
    return (
        <button {...props} className={styles.button}>
            {props.children}
        </button>
    );
};

export default OutlinedRoundedButton;