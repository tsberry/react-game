import React from "react";
import Wrapper from "./Wrapper";
import Header from "./Header";
import Counter from "./Counter";
import Message from "./Message";
import GameBoard from "./GameBoard";
import images from "../images.json";

class Game extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            score: 0,
            highscore: 0,
            message: ""
        };
    }

    scoreAdd = () => {
        this.setState({ score: this.state.score + 1 });
        if (this.state.score >= this.state.highscore) this.setState({ highscore: this.state.score + 1 });
        this.setState({ message: "Correct!" });
    }

    resetGame = () => {
        this.setState({ score: 0 });
        this.setState({ message: "Incorrect!" });
    }

    render() {
        return (
            <Wrapper>
                <Header />
                <Counter score={this.state.score} highscore={this.state.highscore} />
                <Message message={this.state.message} />
                <GameBoard images={images} scoreAdd={this.scoreAdd} resetGame={this.resetGame} />
            </Wrapper>
        );
    }
}

export default Game;