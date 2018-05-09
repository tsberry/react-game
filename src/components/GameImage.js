import React from "react";
import "./GameImage.css";

class GameImage extends React.Component {
    state = {
        clicked: false,
    }

    clickHandle = () => {
        this.setState({clicked: true});
        this.props.scoreAdd();
    }

    render() {
        return (
            <img className="game-image" src={this.props.src} alt={this.props.alt} onClick={this.clickHandle} />
        );
    }

}

export default GameImage;