import React, { Component } from 'react';
import './App.css';
import Wrapper from "./components/Wrapper";
import Header from "./components/Header";
import Counter from "./components/Counter";
import GameBoard from "./components/GameBoard";

class App extends Component {
    state = {
        count: 0
    }

    scoreAdd = () => {
        this.setState({count: this.state.count + 1});
    }

    render() {
        return (
            <Wrapper>
                <Header />
                <Counter count={this.state.count}/>
                <GameBoard scoreAdd={this.scoreAdd}/>
            </Wrapper>
        );
    }
}

export default App;
