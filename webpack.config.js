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
    // publicPath will be changed according to NODE_ENV.
    publicPath: process.env.NODE_ENV === "development" ? "/static/" : "[YOUR_S3_BUCKET_URL]",
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
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        use: [
          {
            loader: "url-loader",
            options: {
              limit: 4096,
              name: "[name].[hash:6].[ext]",
              outputPath: "images/"
            }
          },
          {
            loader: "image-webpack-loader",
            options: {
              mozjpeg: {
                enabled: false
              }
            }
          }
        ]
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
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        use: [
          {
            loader: "url-loader",
            options: {
              emitFile: false,
              limit: 4096,
              name: "[name].[hash:6].[ext]",
              publicPath: "/static/images/"
            }
          },
          {
            loader: "image-webpack-loader",
            options: {
              mozjpeg: {
                enabled: false
              }
            }
          }
        ]
      }
    ]
  },
  resolve: {
    extensions: [".js", ".jsx"]
  }
};

module.exports = [clientConfig, serverConfig];
