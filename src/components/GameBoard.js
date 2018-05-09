import React from "react";
import GameImage from "./GameImage";
import images from "../images.json";

class GameBoard extends React.Component {
    render() {
        return (
            <div className="row">
                {images.map(image => <GameImage key={image.id} src={image.src} alt={image.name} scoreAdd={this.props.scoreAdd}/>)}
            </div>
        );
    }
}

export default GameBoard;