import React from "react";
import GameImage from "./GameImage";

class GameBoard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            images: this.props.images
        };
    }

    shuffle = () => {
        let array = this.state.images;
        var currentIndex = array.length, temporaryValue, randomIndex;

        // While there remain elements to shuffle...
        while (0 !== currentIndex) {

            // Pick a remaining element...
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;

            // And swap it with the current element.
            temporaryValue = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = temporaryValue;
        }
        this.setState({ images: array });
    }

    clickHandle = (clicked) => {
        if (!clicked) {
            this.props.scoreAdd();
            this.shuffle();
        }
        else {
            this.setState((prevstate, props) => (
                {
                    images: []
                }
            ), this.doNext);
        }
    }

    doNext() {
        this.setState((prevstate, props) => (
            {
                images: this.props.images
            }
        ), this.resetBoard);
    }

    resetBoard() {
        this.props.resetGame();
        this.shuffle();
    }

    render() {
        return (
            <div className="row">
                {this.state.images.map(image => <GameImage key={image.id} id={image.id} src={image.src} alt={image.name}
                    clickHandle={this.clickHandle}
                />)}
            </div>
        );
    }
}

export default GameBoard;