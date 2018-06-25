# webpackLearn

#第一步：npm init -y 初始化工程,创建package.json文件；（rm -rf ./node_modules删除安装包）
#第二步：npm install webpack --save-dev 安装webpack;npm install webpack-cli --save-dev 安装webpack-cli
#启动webpack: node_modules/.bin/webpack这样启动不成功；在4.x版本之后，安装webpack，还需要安装webpack-cli才可使用此命令运行;（注：局部安装webpack-cli才可使用node_modules/.bin/webpack此命令bin启动webpack,如果全局安装的webpack-cli，就不需要进入bin目录，webpack就能够寻找到它的命令路径了）
#node_modules/.bin/webpack app/index.js执行此命令可以进行webpack打包，输出dist/main.js文件
#在package.json文件的scripts中加入"webpack":"node_modules/.bin/webpack app/index.js"；执行npm run webpack等同于node_modules/.bin/webpack app/index.js

#=================================================================
webpack打包生成html过程：
#安装html-webpack-plugin ：npm install html-webpack-plugin --save-dev;
#创建webpack.config.js文件，添加配置；
#创建component.js，和完善index.js
#执行node_modules/.bin/webpack。生成build文件夹下的[name].js和index.html

#===============================================================
使用简单方式编译项目：
#npm run build;(在package.json文件下的scripts中添加build命令为webpack，即可打包编译；虽然webpack是局部安装，但是json文件会预加载webpack需要的包，所以这种方式编译也是可以成功的)
#"webpack": "node_modules/.bin/webpack app/index.js",//没有webpack.config.js时使用的命令
#"build":"webpack"//有webpack.config.js时使用的命令

#=======================================================================
自动刷新：
#使用webpack-dev-server插件（WDS），"webpack-dev-server --env development"使用此命令进行打包，访问localhost:8080，可以实时看到变化