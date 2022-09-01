import React from 'react';
import styles from "./CounterButton.module.css";

const CounterButton = ({count, setOrderCount, onMinus, onPlus}) => {

    return (
        <div className={styles.button}>
            <div
                className={styles.buttonChange}
                onClick={ () => {
                    if (count > 0) {
                    setOrderCount(count - 1)
                    onMinus()
                    }}
            }
            >
                -
            </div>
            {count}
            <div
                className={styles.buttonChange}
                onClick={ () => {
                    setOrderCount(count + 1)
                    onPlus()
                } }
            >
                +
            </div>
        </div>
    );
};

export default CounterButton;