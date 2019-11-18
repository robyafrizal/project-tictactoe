import React from "react";
import ReactDOM from "react-dom";

import "./index.css";
import App from "./App";
import NavBar from "./components/NavBar";
import Game from "./components/game";
import Button from "./components/button";
import * as serviceWorker from "./serviceWorker";
import "bootstrap/dist/css/bootstrap.min.css";

ReactDOM.render(<NavBar />, document.getElementById("navbar"));
ReactDOM.render(<Game />, document.getElementById("root"));
ReactDOM.render(<Button />, document.getElementById("other"));
ReactDOM.render(<App />, document.getElementById("text"));

serviceWorker.unregister();
