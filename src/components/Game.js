import React from "react";
import Wrapper from "./Wrapper";
import Header from "./Header";
import Counter from "./Counter";
import GameBoard from "./GameBoard";
import images from "../images.json";

class Game extends React.Component {
    state = {
        score: 0,
        highscore: 0,
    }

    scoreAdd = () => {
        this.setState({score: this.state.score + 1});
        if(this.state.score >= this.state.highscore) this.setState({highscore: this.state.score + 1});
    }

    resetGame = () => {
        this.setState({score: 0});
        
    }

    render() {
        return (
        <Wrapper>
            <Header />
            <Counter score={this.state.score} highscore={this.state.highscore}/>
            <GameBoard images={images} scoreAdd={this.scoreAdd} resetGame={this.resetGame} />
        </Wrapper>
        );
    }
}

export default Game;