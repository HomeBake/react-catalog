import React from 'react';
import styles from "./TextButton.module.css";

const TextButton = (props) => {
    return (
        <button {...props} className={styles.button}>
            {props.children}
        </button>
    );
};

export default TextButton;