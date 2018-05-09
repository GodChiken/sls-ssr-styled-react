import React from "react";
import { readFileSync } from "fs";
import { renderToString } from "react-dom/server";
import { createStore } from "redux";
import { Provider } from "react-redux";
import { StaticRouter } from "react-router";
import { Helmet } from "react-helmet";
import { ServerStyleSheet } from "styled-components";
import App from "../client/components/App";
import rootReducer from "../client/reducers";

// Through webpack, all bundled files' names are hashed and all names are saved in ./dist/public/manifest.json
// We read manifest file to know hashed file names.
const manifest = JSON.parse(readFileSync(`./dist/public/manifest.json`, "utf8"));

const renderPage = (req, res) => {
  // Server-side-rendering for redux store
  const store = createStore(rootReducer);
  const preloadedState = store.getState();

  // Server-side-rendering for styled-components - 1
  const sheet = new ServerStyleSheet();

  // Server-side-rendering for App component
  const staticContext = {};
  const appString = renderToString(
    sheet.collectStyles(
      <Provider store={store}>
        <StaticRouter location={req.url} context={staticContext}>
          <App />
        </StaticRouter>
      </Provider>
    )
  );

  // Server-side-rendering for styled-components - 2
  const styles = sheet.getStyleTags();

  // Server-side-rendering for <head> values
  const helmet = Helmet.renderStatic();

  // Server-side-rendered index.html
  // We can save preloadedState to window object and use it as an initialState of redux store. (browser.jsx)
  const html = `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0">
        ${styles}
        ${helmet.title.toString()}
      </head>
      <body>
        <div id="root">${appString}</div>
      </body>
      <script>
        window.PRELOADED_STATE = ${JSON.stringify(preloadedState)} 
      </script>
      <script src=${manifest["main.js"]}></script>
    </html>
  `;

  res.send(html);
};

export default renderPage;
