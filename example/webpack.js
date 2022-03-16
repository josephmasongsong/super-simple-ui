const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin').default;

module.exports = {
  entry: {
    'main': './src/main.js',
    'browser': './src/main.umd.js'
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].bundle.css',
    })    
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1
            }
          },
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: [
                    require('tailwindcss'),
                    require('autoprefixer')
                  ]
              }
            }
          },
          {
            loader: 'sass-loader'
          }
        ]
      },
      {
        test: /\.(svg|eot|ttf|woff|woff2)$/i,
        type: 'asset/resource'
      }
    ]
  }
}