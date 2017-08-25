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
isomorphic-fetch
