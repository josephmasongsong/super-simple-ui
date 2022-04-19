const { merge } = require('webpack-merge');
const common = require('./webpack');
const TerserPlugin = require('terser-webpack-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = merge(common, {
  mode: 'production',
  optimization: {
    minimizer: [new TerserPlugin(), new CssMinimizerPlugin()],
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'src/index.html',
      minify: false,
      inject: 'body',
    }),
    new HtmlWebpackPlugin({
      filename: 'docs.html',
      template: 'src/docs.html',
      minify: false,
      inject: 'body',
    }),
  ],
});
