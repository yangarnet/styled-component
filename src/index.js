import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import hero from "./images/hero.jpg";
import logo from "./images/logo.png";

ReactDOM.render(
    <App hero={hero} logo={logo} />,
    document.getElementById("root")
);
