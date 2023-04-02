import React from "react";
import "../styles/Button.css"
import PropTypes from "prop-types"

const Button1 =({text, variant, action}) => {
    return (
        <button className={`btn btn-${variant}`} onClick={action} > 
           {text}
        </button>
    )
}


Button1.propTypes = {
    text : PropTypes.string.isRequired,
    variant : PropTypes.string.isRequired,
    action : PropTypes.func
}

export default Button1;
