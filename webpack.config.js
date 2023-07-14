const path = require("path");
const WebpackFavicons = require("webpack-favicons");
module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
      },
    ],
  },
  plugins: [
    new WebpackFavicons({
      src: "/src/image/favicon.png",
      path: "img",
      icons: {
        favicons: true,
      },
    }),
  ],
};
