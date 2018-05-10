import React from "react";

class Wrapper extends React.Component {
    render = () => (
        <div className="container">
            {this.props.children}
        </div>
    );
}

export default Wrapper;