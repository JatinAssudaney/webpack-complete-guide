const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { ModuleFederationPlugin } = require("webpack").container;

module.exports = {
  entry: "./src/mountain.js",
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "./dist"),
    publicPath: "",
  },
  mode: "development",
  devServer: {
    port: 9002,
    static: {
      directory: path.resolve(__dirname, "./dist"),
    },
    devMiddleware: {
      index: "mountain.html",
      writeToDisk: true,
    },
  },
  module: {
    rules: [
      {
        test: /\.(png|jpg)$/,
        type: "asset",
        parser: {
          dataUrlCondition: {
            maxSize: 3 * 1024,
          },
        },
      },
      {
        test: /\.txt/,
        type: "asset/source",
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/env"],
            plugins: ["@babel/plugin-proposal-class-properties"],
          },
        },
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      filename: "mountain.html",
      title: "mountain",
      description: "mountain",
    }),
    new ModuleFederationPlugin({
      name: "MoutainApp",
      remotes: {
        HelloWorldApp: "HelloWorldApp@http://localhost:9001/remoteEntry.js",
      },
    }),
  ],
};
