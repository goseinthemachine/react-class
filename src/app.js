import React from "react";
import ReactDOM from "react-dom";

const NameTag = (props) => {
    return React.createElement("div", {}, [
        React.createElement("h1", {}, `Hello ${props.name}`)
    ])
}

const App = () => {
    return React.createElement(
        "div",
        {},
        React.createElement("h1", {}, "Hello World!"),
        React.createElement(NameTag, {
            name: "Cameron"
        })
    );
};

ReactDOM.render(React.createElement(App), document.getElementById("root"));

