var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
  
  entry: './src/main.ts',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'app.bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.ts$/, 
        use: [
          {
            loader: 'ts-loader'
          }
        ]
      },
      {
        test: /\.html$/, 
        use: [
          {
            loader: 'raw-loader'
          }
        ]
      },
      {
        test: /\.css$/, 
        use: [
          {
            loader:'raw-loader'
          }
        ]
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.ts', '.html', '.css']
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html'
    }),
    new webpack.DefinePlugin({
      app: {
        environment: JSON.stringify(process.env.APP_ENVIRONMENT || 'development')
      }
    }),
    new webpack.ContextReplacementPlugin(
      /angular(\\|\/)core(\\|\/)@angular/,
      path.resolve(__dirname, '../src')
    )
  ],
  devServer: {
    historyApiFallback: true
  }

};
