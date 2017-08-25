const path = require('path');
module.exports = {
    // 入口文件
    entry: './index.js',

    // 输出文件
    output: {
        // filename: 'bundle.js',
        //生产环境打开
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public/assets/js'),
    publicPath: '/'
    },
    devServer: {
        // historyApiFallback: true,
        // contentBase: "./",
        // quiet: false, //控制台中不输出打包的信息
        // noInfo: false,
        // hot: true, //开启热点
        // inline: true, //开启页面自动刷新
        // lazy: false, //不启动懒加载
        // progress: true, //显示打包的进度
        // watchOptions: {
        //     aggregateTimeout: 300
        // },
    historyApiFallback: true,
    noInfo: true,
    hot: true,
    inline: true,
        // port: '8097', //设置端口号
        // host:'192.168.2.110',
        //其实很简单的，只要配置这个参数就可以了
        proxy: {
            '/request/*': {
                target: 'http://192.168.2.110:8097',//目标服务器地址
                changeOrigin: true, //虚拟主机网站需要
                secure: false
            }
        }

    },
    module: {
        loaders: [
            // 匹配到js或jsx文件后 使用 babel-loader 来处理
            // '?'后面是该loader的参数设置(使用了es6和react转码器)
            {
                test: /\.js[x]?$/,
                exclude: /node_modules/,
                loader: 'babel-loader?presets[]=es2015&presets[]=react'
            },
            {test: /\.less$/,
             loader: 'style-loader!css-loader!less-loader'
         },
          { test: /\.css$/, loader: 'style-loader!css-loader' }
        ]
    },
      plugins: [

  ]

};

