/*
* @Author: anchen
* @Date:   2017-08-25 10:52:26
* @Last Modified by:   anchen
* @Last Modified time: 2017-08-28 18:23:54
*/
//node开一个服务，使用proxy解决跨域问题
const compression = require('compression');//文件压缩
const express = require('express');//node服务
const proxy = require('http-proxy-middleware');//proxy解决跨域问题
const path = require('path');
const app = express();
app.use(compression());
//定义express静态托管文件放在public下面
// app.use(express.static('public', {
//   maxAge: '2h'
// }));
app.use(express.static(path.join(__dirname, 'public')));
app.get('*', function (req, res) {
    // 在中间添加 'public' 路径
    res.sendFile(path.join(__dirname, 'public', 'index.html'))
})
// 截取请求，遇到链接中的request就拦截到http://192.168.2.110:8097、request
app.use('/request/*', proxy({
  target: 'http://192.168.2.110:8097',
  // pathRewrite: { '^/request': '' },
  changeOrigin: true,
 secure: false
}));

console.log('\n[WARNING] react is now running in PRODUCTION mode.');
console.log('[WARNING] If you want to run it in DEVELOPMENT mode, please try "npm run dev" instead.\n');
app.listen(8082, () => {
  console.log('[INFO] react is now listening at 8082...');
});
