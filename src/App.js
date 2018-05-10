import React, { Component } from 'react';
import './App.css';
import Wrapper from "./components/Wrapper";
import Header from "./components/Header";
import Counter from "./components/Counter";
import GameBoard from "./components/GameBoard";
import images from "./images.json";

class App extends Component {
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

export default App;
