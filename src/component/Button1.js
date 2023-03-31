import React from "react";
import "../styles/Button.css"

const Button1 =(props) => {
    return (
        <button className={`btn btn-${props.variant}`}> 
           {props.text}
        </button>
    )
}

export default Button1;
