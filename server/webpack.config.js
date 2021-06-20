const path = require("path");

module.exports = {
  entry: "./src/index.ts",
  target: "node",
  mode: "production",
  output: {
    path: path.resolve(__dirname, "../dist/server/"),
    filename: "index.js",
    clean: true
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        exclude: /node_modules/,
        use: "ts-loader",
      },
    ]
  },
  resolve: { extensions: ['.ts', '.js'] },
  devtool: 'inline-source-map',
};