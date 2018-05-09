import React from "react";

class Header extends React.Component {
    render() {
        return (
            <div className = "jumbotron">
                <h1>Game of Thrones Memory Game</h1>
                <p>Click on all 12 characters without clicking any twice.</p>
            </div>
        );
    }
}

export default Header;