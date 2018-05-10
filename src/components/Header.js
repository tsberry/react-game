import React from "react";

class Header extends React.Component {
    render = () => (
        <div className="jumbotron text-center">
            <h1>Game of Thrones Memory Game</h1>
            <p>Click on all 12 characters without clicking any twice.</p>
        </div>
    );
}

export default Header;