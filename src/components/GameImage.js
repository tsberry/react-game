import React from "react";
import "./GameImage.css";

class GameImage extends React.Component {
    render() {
        return <img className="game-image" src={this.props.src} alt={this.props.alt}/>;
    }

}

export default GameImage;