import React from "react";


class List1 extends React.Component{
    render() {
        return(
            <div>
                <h1>List -1 </h1>
                <h3> {this.props.name} </h3>
                <h3> {this.props.alamat} </h3>
            </div>
        )
    }
}

export default List1;
