import React from "react";
import "./GameImage.css";

class GameImage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            clicked: false
        };
    }

    clickHandle = () => {
        const clicked = this.state.clicked;
        this.setState({ clicked: true });
        this.props.clickHandle(clicked);
    }

    render = () => (
        <img className="game-image img-thumbnail" src={this.props.src} alt={this.props.alt} onClick={this.clickHandle} />
    );

}

export default GameImage;