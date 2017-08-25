/*
* @Author: anchen
* @Date:   2017-08-22 16:00:57
* @Last Modified by:   anchen
* @Last Modified time: 2017-08-25 17:23:44
*/

import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory } from 'react-router'
import App from './modules/App';
import 'babel-polyfill';//跟es6结合解决360、ie等不支持es6的浏览器报symbol未定义

// 增加 About 和 Repos 组件
import About from './modules/About'
import Repos from './modules/Repos'
import Repo from './modules/repo'
import nets from './modules/nets'
import organ from './modules/organ'
import baobeiS from './modules/baobeiS'
import account from './modules/account'

ReactDOM.render((
<Router history={hashHistory}>
  <Route path="/" component={App}>
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
