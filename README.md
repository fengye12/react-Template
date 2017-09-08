# react-Template
 a simple react template for item

##react
#### 开发环境运行
npm run dev  //webpack-dev-server 应用node express开一个服务并且开启热更新 根据output的配置生成虚拟的bundle.js文件
#### 生产环境运行
npm run build //生成bundle,.js
npm start       //启动node服务器解决跨域（proxy）以及express静态资源托管在public文件夹下面
#### 数据请求
使用fetch代替ajax请求
isomorphic-fetch配合es6-promise

### 配置文件说明
output:
path:入口文件生产的出口文件的地址
publicPath：会影响npm run dev下bundle.js以及静态文件生成的位置
devServer下面的配置文件解决了跨域的问题（正向代理proxy）
具体生成文件以及服务的根路径npm run dev看提示
在默认情况下, 打包过程会
将使用到的图片拷贝一份放到output的path指定的目录下, 然而在build.js中引用的图片路径确实整个工程文件的根目录, 因此自然引
用不到. 那么应该如何处理呢? 在webpack.config.js文件中output对象中指定publicPath属性, 它用来指定静态资源 (图片等) 的发布地
址, 当配置过该属性后，打包文件 (也就是build.js) 中所有通过相对路径引用的资源都会被配置的路径所替换。因此通过如此设置
之后build.js中引用该图片的路径会在一开始的根目录的路径后面添加publicPath指定的路径

### 引入jquery的步骤
 #### webpack配置文件
 plugins: [
new webpack.ProvidePlugin({
$: 'jquery',
jQuery: "jquery",
"window.jQuery": "jquery"
    })
 ]
 #### 需要用jquery的文件引入、
 import $ from 'jquery';
然后使用
具体情况查看login.js

### 图片的引用 url-loader
webpack中定义路径以及文件的名称和文件大小限制，小于某个值生成base64位图片
