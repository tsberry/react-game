import React from "react";
import GameImage from "./GameImage";
import images from "../images.json";

class GameBoard extends React.Component {
    render() {
        return (
            <div>
                {images.map(image => <GameImage key={image.id} src={image.src} alt={image.name} />)}
            </div>
        );
    }
}

export default GameBoard;