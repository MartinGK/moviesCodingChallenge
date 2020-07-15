import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { Provider } from "react-redux";
import Home from "components/pages/Home";
import allReducers from "store/reducers";
import "sass/main.scss";

const store = createStore(
  allReducers,
  (Boolean(window.__REDUX_DEVTOOLS_EXTENSION__) ?
    compose(
      applyMiddleware(thunk),
      window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__({ trace: true, traceLimit: 25})
    ) : applyMiddleware(thunk))
);

function App() {
  return (
    <Provider store={store}>
        <Router>
          <main >
            <Switch>
              <Route path="/" exact render={props => <Home action="login" />} />
              <Route
                exact
                path="/register"
                render={props => <Home action="register" />}
              />
            </Switch>
          </main>
        </Router>
    </Provider>
  );
}

export default App;
