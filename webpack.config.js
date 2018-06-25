const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');

const PATHS = {
   app: path.join(__dirname, 'app'),//__dirname根目录
   build: path.join(__dirname, 'build'),
}

module.exports = {
   entry: {
      index: PATHS.app,//app/index.js
   },
   output: {
      path: PATHS.build,
      filename: '[name].js',//[name]对应entry对象的key
   },
   plugins: [
      new htmlWebpackPlugin({
         title:'Webpack demo',
      }),
   ],
}