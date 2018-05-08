import express from "express";
import helmet from "helmet";
import logger from "morgan";
import renderPage from "./renderPage";

const testFolder = "./dist/public";
const fs = require("fs");

fs.readdir(testFolder, (err, files) => {
  files.forEach(file => {
    console.log(file);
  });
});

const app = express()
  .use(helmet())
  .use(logger("dev"))
  .use(express.json())
  .use(express.urlencoded({ extended: true }))
  .use("/static/", express.static("./dist/public"))
  .get("*", renderPage);

const PORT = process.env.PORT || 1234;
app.listen(PORT, () => console.log(`Server Listening on Port : ${PORT}`));

module.exports = app;
