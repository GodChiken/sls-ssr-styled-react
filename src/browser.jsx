import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import rootReducer from "./client/reducers";
import App from "./client/components/App";

const env = process.env.NODE_ENV;

const middlewares = [thunk];

if (env === "development") {
  const { logger } = require("redux-logger");
  middlewares.push(logger);
}

// We can use preloadedState which was saved in server-side-rendering. (renderPage.jsx)
// We can use it as an initialState of redux store.
const preloadedState = window.PRELOADED_STATE;
delete window.PRELOADED_STATE;

const store =
  env === "development"
    ? createStore(rootReducer, preloadedState, composeWithDevTools(applyMiddleware(...middlewares)))
    : createStore(rootReducer, preloadedState, applyMiddleware(...middlewares));

// We use ReactDOM.hydrate() for server-side-rendering instead of ReactDOM.render().
ReactDOM.hydrate(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
