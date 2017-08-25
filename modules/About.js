/*
* @Author: anchen
* @Date:   2017-08-22 15:36:00
* @Last Modified by:   anchen
* @Last Modified time: 2017-08-25 16:56:30
*/

import React from 'react';
import 'isomorphic-fetch';
import Promise from 'es6-promise';
// import myFetch from './fetch'
const data={"action":"23","time":"","sessid":"","rannum":"","md5ver":"","param":[{"sskey":"","departmentid":"30965140814C4BF19760310946ADE66E","ssmode":"1","sssel":"0","page_index":"1","page_size":"20"}],"datas":{}}
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
export default class Repos extends React.Component {
    constructor(props) {
        super(props);
    };
    componentDidMount(){
      console.log('componentDidMount')
      const Url="/request/action";
      fetch(Url,{
          method:"POST",
          headers:{
              "Accept": "application/json",
              "Content-Type": "application/json"
          },
          body:JSON.stringify(data)
      }).then(function(response) {
              console.log(response);
              return response.text();
          })
          .then((data) => {
              console.log(data);
          }).catch(e=>{console.log(e);})
    };
    render() {
        return (
            <div>About</div>
        );
    }
}