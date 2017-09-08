/*
* @Author: anchen
* @Date:   2017-08-22 15:36:00
* @Last Modified by:   anchen
* @Last Modified time: 2017-09-08 09:55:37
*/

import React from 'react';
import { Link } from 'react-router';
import './style/css/login.less';

import './style/css/app.less';
import $ from 'jquery';
import { Router, Route, browserHistory,IndexRoute } from 'react-router'
// import GetOjson from './getJson';
// import json_parse from './jsonParse';
// const data={"action":"23","time":"","sessid":"","rannum":"","md5ver":"","param":[{"sskey":"","departmentid":"30965140814C4BF19760310946ADE66E","ssmode":"1","sssel":"0","page_index":"1","page_size":"20"}],"datas":{}}
// function myFetch(Url){
//     fetch(Url,{
//         method:"POST",
//         headers:{
//             "Accept": "application/json",
//             "Content-Type": "application/json"
//         },
//         body:JSON.stringify(data)
//     }).then(function(response) {
//             console.log(response);
//             return response.text();
//         })
//         .then((data) => {
//             console.log(data);
//         }).catch(e=>{console.log(e);})
// }
// myFetch("/request/action");
export default class login extends React.Component {
    constructor(props) {
        super(props);
         this.state = {
        }
    };
    login(){
      console.log('gagag')
       browserHistory.push('/app')
    };
    componentDidMount(){
       console.log($("#buttonC").get(0));
       $("#buttonC").click(function(){
         $(this).after("<div>我是jquery创建的元素</div>")
       })
     };
    render() {
        return (
            <div className="divBg">
            <div className="loginWarp">
              <div className="inputWrap">
                <label>账号/昵称</label>
                <div className="inputBlock">
                <input type="text" placeholder="请输入账号/昵称" />
                </div>
              </div>
              <div className="inputWrap">
                <label>密码</label>
                <div className="inputBlock">
                <input type="text" placeholder="请输入登录密码" />
                </div>
              </div>
              <button id="buttonC"></button>
              <button className="btn" onClick={this.login.bind(this)}>登录</button>
            </div>
            </div>
        );
    }
}
