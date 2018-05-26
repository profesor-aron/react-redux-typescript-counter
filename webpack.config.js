const HtmlWebPackPlugin = require("html-webpack-plugin")

const htmlPlugin = new HtmlWebPackPlugin({
  template: "./src/index.html",
  filename: "./index.html"
})

module.exports = {
  devtool: "source-map",
  resolve: {
    extensions: [".ts", ".tsx", ".js"]
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: {
          loader: "awesome-typescript-loader"
        }
      }
    ]
  },
  plugins: [htmlPlugin]
}
