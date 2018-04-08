const merge = require('webpack-merge');
const common = require('./webpack.common');
const { HotModuleReplacementPlugin } = require('webpack');

module.exports = merge(common, {
  entry: './src/js/index.js',
  devtool: 'inline-source-map',

  devServer: {
    contentBase: `./dist`,
    historyApiFallback: true, // for use with client side router
    hot: true,
    port: 3000
  },

  plugins: [
    new HotModuleReplacementPlugin()
  ]
});
