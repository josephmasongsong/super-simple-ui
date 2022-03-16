const { merge } = require('webpack-merge');
const common = require('./webpack');
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');

module.exports = merge(common, {
  mode: 'development',
  watch: true,
  plugins: [
    new BrowserSyncPlugin({
      files: ['**/*.html', '**/*scss', '**/*.js'],
      host: 'localhost',
      port: 3000,
      injectChanges: true,
      server: {
        baseDir: ['./'],
      },
    }),
  ],
});
