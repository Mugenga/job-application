import React from "react";
import Applications from "./Pages/Applications";
import Apply from "./Pages/Apply";
import Home from "./Pages/Home";
import ViewApplication from "./Pages/View";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/applications" component={Applications} />
        <Route path="/view/:id" component={ViewApplication} />
        <Route exact path="/apply" component={Apply} />
      </Switch>
    </Router>
  );
}

export default App;
