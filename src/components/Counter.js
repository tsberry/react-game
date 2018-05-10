import React from "react";
import "./Counter.css";

class Counter extends React.Component {


    render = () => (
        <div className="row">
            <div className="counter text-center">
                Current Score: {this.props.score} | High Score: {this.props.highscore}
            </div>
        </div>
    );
}

export default Counter;