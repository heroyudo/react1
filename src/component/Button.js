import React from "react";
import PropTypes  from "prop-types";

class Button extends React.Component{
    state ={
        name : "satu",
        text : ""
    }

    click = () => {
        this.setState({name:this.state.text})
        this.setState({text: "" })

    }

    change = e =>{
        this.setState({
            text : e.target.value
        })
    }

    render() {
        return(
            <div>
                {/* <h1>{this.state.name}</h1>
                <input type="text" value={this.state.text} onChange={this.change} />
                <button onClick={this.click}>Click </button> */}
            <h1>HTML</h1>

            </div>
        )
    }
}

Button.propTypes = {
    color : PropTypes.string,
}

export default Button;
