import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "components/pages/Home";
import Root from 'Root';
import "sass/main.scss";

export default function App() {
  return (
    <Router>
      <main >
        <Switch>
          <Route path="/" render={props => <Home action="login" />} />
          <Route
            exact
            path="/register"
            render={props => <Home action="register" />}
          />
        </Switch>
      </main>
    </Router>
  );
}