import React from "react";
import Button1 from "./Button1";
import "../styles/FormInput.css"

class FormInput extends React.Component {
    render() {
        return (
            <form style={inputForm}>
                <input type="text"  
                 style={input}
                 placeholder="tulis tambah tugas"
                />
                <Button1 text="add" variant="primary"/>
            </form>
        )
    }
}

export default FormInput;

const inputForm ={
    background : "#fff",
    color : "#fff",
    display : "flex",
    alignItems : "center",
    height : "3rem",
    padding : "0 1rem",
    justifyContent : "space-between",
    margin: "0.5rem 0"
}


const input = {
    width : "70%",
    border : "none"
}
