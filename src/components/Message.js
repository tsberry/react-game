import React from "react";
import "./Message.css";

class Message extends React.Component {
    render = () => (
        <div className="row">
            <div className="message-container">
                <h2 className="text-center">{this.props.message}</h2>
            </div>
        </div>
    );
}

export default Message;