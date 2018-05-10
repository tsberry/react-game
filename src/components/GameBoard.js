import React from "react";
import GameImage from "./GameImage";

class GameBoard extends React.Component {
    state = {
        imagesClicked: this.props.images.map(image => {
            return {
                image: image,
                clicked: false
            };
        }),
        hello: "Hello"
    }

    shuffle = () => {
        let array = this.state.imagesClicked;
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
        this.setState({imagesClicked: array});
    }

    clickHandle = (id) => {
        var image = this.state.imagesClicked.find(imageObj => imageObj.image.id === id);
        var clicked = image.clicked;
        if(!clicked) {
            image.clicked = true;
            this.props.scoreAdd();
        }
        else {
            this.setState({imagesClicked: this.props.images.map(image => {
                return {
                    image: image,
                    clicked: false
                };
            })});
            this.props.resetGame();
        }
        this.shuffle();
    }

    render() {
        return (
            <div className="row">
                {this.state.imagesClicked.map(image => <GameImage key={image.image.id} id={image.image.id} src={image.image.src} alt={image.image.name}
                    clickHandle={this.clickHandle}
                    />)}
            </div>
        );
    }
}

export default GameBoard;