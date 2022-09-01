import React from 'react';
import OutlinedButton from "./OutlinedButton";
import CounterButton from "./CounterButton";
import RoundedButton from "./RoundedButton";
import SubmitButton from "./SubmitButton";
import TextButton from "./TextButton";
import "./Button.css";
import OutlinedRoundedButton from "./OutlinedRoundedButton";

const Button = (props) => {

    let button = ''

    switch (props.type) {
        case 'outline' :
            button = <OutlinedButton {...props}> {props.children} </OutlinedButton>
            break
        case 'counter' :
            button = <CounterButton {...props} count={props.count} onMinus={props.onMinus} onPlus={props.onPlus}/>
            break
        case 'rounded' :
            button = <RoundedButton {...props}> {props.children} </RoundedButton>
            break
        case 'text' :
            button = <TextButton {...props}> {props.children} </TextButton>
            break
        case 'outlinedRounded' :
            button = <OutlinedRoundedButton {...props}> {props.children}</OutlinedRoundedButton>
            break
        default :
            button = <SubmitButton {...props}> {props.children} </SubmitButton>
    }


    return (
        <>
            {button}
        </>
    );
};

export default Button;