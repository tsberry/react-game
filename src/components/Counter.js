import React from "react";
import "./Counter.css";

class Counter extends React.Component {
    

    render() {
        return (
            <div className="row">
                <p className="counter text-center">
                    Current Score: {this.props.count}
                </p>
            </div>
        );
    }
}

export default Counter;