import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from "./app/reducers";
import App from "./app/components/App";

const env = process.env.NODE_ENV;

const middlewares = [];

if (env === "development") {
  const { logger } = require("redux-logger");
  middlewares.push(logger);
}

const preloadedState = window.PRELOADED_STATE;
delete window.PRELOADED_STATE;

console.log(env);

const store =
  env === "development"
    ? createStore(rootReducer, preloadedState, composeWithDevTools(applyMiddleware(...middlewares)))
    : createStore(rootReducer, preloadedState, applyMiddleware(...middlewares));

ReactDOM.hydrate(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
