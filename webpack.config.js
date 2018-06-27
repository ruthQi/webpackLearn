const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const PATHS = {
   app: path.join(__dirname, 'app'),//__dirname根目录
   build: path.join(__dirname, 'build'),
};

const plugin = new ExtractTextPlugin({
   filename: '[name].css',
   ignoreOrder: true
})

module.exports = {
   devServer:{
      host:'localhost',
      port:'80',
   },
   performance:{
      hints: 'warning',
      maxEntrypointSize: '100000',//bytes(编译之后的app.js)
      maxAssetSize: '450000'//bytes(图片文件等的大小)
   },
   entry: {
      app: PATHS.app,//app/index.js
   },
   output: {
      path: PATHS.build,
      filename: '[name].js',//[name]对应entry对象的key
   },
   module:{
      rules:[
         {
            test: /\.js$/,
            enforce:'pre',
            loader: 'eslint-loader',
            options: {
               emitWarning: true,
            }
         },
         {
            test: /\.css$/,
            exclude: /node_modules/,
            use: plugin.extract({
               use: {
                  loader: 'css-loader',
                  options: {
                     modules: true
                  }
               },
               fallback: 'style-loader'
            })
            // use: [
            //    'style-loader',
            //    {
            //       loader: 'css-loader',
            //       options:{//模块化引入样式，需要添加此选项，否则样式都为undefined
            //          modules: true
            //       }
            //    }
            // ]
         }
      ]
   },
   plugins: [
      new htmlWebpackPlugin({
         title:'Webpack demo',
      }),
      plugin
   ],
};