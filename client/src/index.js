import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
//import reportWebVitals from "./reportWebVitals";
import { Router } from "react-router-dom";
import { createBrowserHistory } from "history";


const customHistory = createBrowserHistory();

ReactDOM.render(
  <React.StrictMode>
    <Router history={customHistory}>
      <App />
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
