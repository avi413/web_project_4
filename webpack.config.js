const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin"); 
const { CleanWebpackPlugin } = require("clean-webpack-plugin"); // connect plugin 
const MiniCssExtractPlugin = require("mini-css-extract-plugin"); 

module.exports = {
  devtool: 'inline-source-map',
  entry: {
    index: './src/pages/index.js',
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "main.js",
    publicPath: "",
  },
  target: ['web', 'es5'],
  stats: { children: true },
  mode: 'development' ,
  devServer: {
    static: path.resolve(__dirname, './dist'), // specifies a folder from where to serve the application and its contents
    compress: true, // this will speed up file loading in development mode
    port: 8080, // will open your site at localhost:8080 (you can use another port)
    open: true // site will open automatically in the browser after executing npm run dev
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: "babel-loader",
        exclude: "/node_modules/"
      },
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: "css-loader",
            options: { importLoaders: 1 }
          },
          // add postcss-loader
          "postcss-loader"
        ]
      },
      {
        // add the rule for processing files
        test: /\.(png|svg|jpg|gif|woff(2)?|eot|ttf|otf)$/,
        type: "asset/resource"
      },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
        template: "./src/index.html" // path to our index.html file
      }),
      new CleanWebpackPlugin(),
      new MiniCssExtractPlugin()
  ], // add the array here
}

// rewrite the output point using the path utility 
