import React from 'react';
import styles from "./CounterButton.module.css";

const CounterButton = ({count, setCount}) => {

    return (
        <div className={styles.button}>
            <div
                className={styles.buttonChange}
                onClick={ () => {
                    count > 0 && setCount(count - 1)}}
            >
                -
            </div>
            {count}
            <div
                className={styles.buttonChange}
                onClick={ () => {
                   setCount(count + 1)}}
            >
                +
            </div>
        </div>
    );
};

export default CounterButton;