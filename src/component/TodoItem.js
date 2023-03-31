import React from "react";
import Button1 from "./Button1";

const TodoItem =() => {
    return (
        <div style={todoItem}>
            <p>title item</p>
            <div>
                <Button1 text="edit" variant="success"/>
                <Button1 text="delete" variant="warning" />
            </div>
        </div>
    )
}


export default TodoItem;

const todoItem = {
    background : "#2da4f8",
    color : "#fff",
    display : "flex",
    alignItems : "center",
    height : "3rem",
    padding : "0 1rem",
    justifyContent : "space-between",
    margin: "0.5rem 0"
}

