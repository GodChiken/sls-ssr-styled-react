const path = require("path");
const nodeExternals = require("webpack-node-externals");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const ManifestPlugin = require("webpack-manifest-plugin");

const clientConfig = {
  name: "client",
  target: "web",
  entry: "./src/browser.jsx",
  output: {
    path: path.join(__dirname, "dist/public"),
    publicPath: "https://s3.ap-northeast-2.amazonaws.com/small-wins-static/",
    filename: "bundle.[hash:6].js"
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: {
          loader: "babel-loader"
        },
        exclude: /node_modules/
      }
    ]
  },
  plugins: [new CleanWebpackPlugin(["dist"]), new ManifestPlugin()],
  resolve: {
    extensions: [".js", ".jsx"]
  }
};

const serverConfig = {
  name: "server",
  target: "node",
  externals: nodeExternals(),
  entry: "./src/lambda.js",
  output: {
    path: path.join(__dirname, "dist"),
    filename: "lambda.js",
    libraryTarget: "commonjs2"
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: {
          loader: "babel-loader"
        },
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: [".js", ".jsx"]
  }
};

module.exports = [clientConfig, serverConfig];
