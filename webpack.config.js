const path = require("path");

module.exports = {
  entry: path.resolve(__dirname, "src", "App.js"), // arquivo principal da aplicação
  output: {
    path: path.resolve(__dirname, "public"),
    filename: "bundle.js"
  },
  devServer: {
    contentBase: path.resolve(__dirname, "public") // pasta que o webserver precisa ficar monitorando pra atualizar o bundle quando necessario
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.css$/,
        use: [{ loader: "style-loader" }, { loader: "css-loader" }]
      }
    ]
  }
};
