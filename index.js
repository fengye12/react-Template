/*
* @Author: anchen
* @Date:   2017-08-22 16:00:57
* @Last Modified by:   anchen
* @Last Modified time: 2017-09-07 15:57:12
*/

import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory,IndexRoute } from 'react-router'
import App from './modules/App';
import 'babel-polyfill';//跟es6结合解决360、ie等不支持es6的浏览器报symbol未定义

// 增加 About 和 Repos 组件
import About from './modules/About'
import Login from './modules/Login'
import Repos from './modules/Repos'
import Repo from './modules/repo'
import nets from './modules/nets'
import organ from './modules/organ'
import baobeiS from './modules/baobeiS'
import account from './modules/account'

// Link 组件中的to属性定义了 URL 中 #号 之后的路径参数，所以要和 Route 组件中的 path值相对应。
ReactDOM.render((
<Router history={browserHistory}>
<Route path="/" component={Login}/>
  <Route path="/app" component={App}>
    <Route path="/repos" component={Repos}/>
    <Route path="/nets" component={nets}/>
    <Route path="/organ" component={organ}/>
    <Route path="/baobeiS" component={baobeiS}/>
    <Route path="/account" component={account}/>
    <Route path="/about" component={About}/>
     <Route path="/repos/:userName/:repoName" component={Repo} />
  </Route>
</Router>
), document.getElementById('app'));
