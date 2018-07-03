const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const WebpackUglifyPlugin = require('webpack-parallel-uglify-plugin');//require('uglifyjs-webpack-plugin');
//const CleanWebpackPlugin = require('clean-webpack-plugin');
//babili压缩
const BabiliPlugin = require('babili-webpack-plugin');

const webpack = require('webpack');

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
      hot: true,//--hot
   },
   devtool:'source-map',
   performance:{//js或css文件超过指定的大小时会给出warning警告
      hints: 'warning',
      maxEntrypointSize: 500000,//bytes(编译之后的app.js)
      maxAssetSize: 450000//bytes(图片文件等的大小)
   },
   entry: {
      app: './app/index.js'//PATHS.app,//app/index.js
   },
   output: {
      path: PATHS.build,
      filename: '[name].js'//[name]对应entry对象的key
   },
   optimization: {
      splitChunks:{
         cacheGroups: {
            // commons: {
            //   name: 'commons',
            //   chunks: 'initial',
            //   minChunks: 2
            // }
            commons: {
              test: /[\\/]node_modules[\\/]/,
              name: 'vendors',
              chunks: 'all'
            }
          }
      }
   },
   module:{
      rules:[
         {
            test: /\.js$/,
            enforce:'pre',
            exclude: /node_modules/,
            //loader: 'babel-loader',
            use: [
               {loader: 'babel-loader'},
               {loader: 'eslint-loader'}
            ],
            // options: {
            //    emitWarning: true,
            // }
         },
         {
            test: /\.css$/,
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
      //new BabiliPlugin(),//好像不能使用sourceMap(devtool和babili一起使用报错)
      new htmlWebpackPlugin({
         title:'Webpack demo',
      }),
      plugin,
      // new WebpackUglifyPlugin({//uglifyjs-webpack-plugin压缩
      //    sourceMap: true
      // }),
      new WebpackUglifyPlugin({//webpack-parallel-uglify-plugin
         sourceMap: true,
         uglifyJS: {
            output: {
               comments: false
            },
            compress: {
               warnings: false
            }
         }
      }),

      //--hot
      new webpack.NamedModulesPlugin(),
      new webpack.HotModuleReplacementPlugin(),
   ],
};