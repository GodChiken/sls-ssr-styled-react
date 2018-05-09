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

const manifest = JSON.parse(readFileSync(`./dist/public/manifest.json`, "utf8"));

const renderPage = (req, res) => {
  const store = createStore(rootReducer);
  const sheet = new ServerStyleSheet();

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

  const styles = sheet.getStyleTags();
  const preloadedState = store.getState();
  const helmet = Helmet.renderStatic();

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
