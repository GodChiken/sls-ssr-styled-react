import express from "express";
import helmet from "helmet";
import morgan from "morgan";
import renderPage from "./renderPage";

const app = express()
  .use(helmet())
  .use(morgan("dev"))
  .use(express.json())
  .use(express.urlencoded({ extended: true }));

if (process.env.NODE_ENV === "development") {
  app.use("/static/", express.static("dist/public"));

  const PORT = process.env.PORT || 1234;
  app.listen(PORT, () => console.log(`Server Listening on Port : ${PORT}`));
}

app.get("*", renderPage);

module.exports = app;
