/*
* @Author: anchen
* @Date:   2017-08-22 15:36:00
* @Last Modified by:   anchen
* @Last Modified time: 2017-08-25 16:56:52
*/

import React from 'react';
import './style/app.less';
import 'isomorphic-fetch';
import Promise from 'es6-promise';
// import GetOjson from './getJson';
// import json_parse from './jsonParse';
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
         this.state = {
            data:[{'dd':'nn'}],
            loading:0
        }
    };
    componentWillMount(){
      this.setState({
        loading:1
      })
    };
    componentDidMount(){
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

              const res = JSON.parse((unescape(data)));
              this.setState({data:res.param,loading:0},  () => {
                console.log(this.state.data)

                 });

          }).catch(e=>{console.log(e);})
    };
    render() {
        return (
            <div>
            <div className="header">米阳食品智慧监管</div>
            <div className="contentWrap">
            <div className="topNav"><a href="javascript:;">系统设置</a>/<a href="javascript:;">机关信息</a></div>
              <div className="tableWrap">
              <h2>机关信息</h2>
              <table>
              <tbody>
               {

                     this.state.data.map((result,i)=> {
                      return <tr key={result.areacode+i} style={{display:this.state.loading==1?'none':'block'}}><td>{result.areaname}</td>
                      <td>{result.department}</td>
                      <td>{result.dept_listname}</td>
                      <td>{result.pdepartment}</td>
                      <td>{result.areacode}</td>
                      </tr>
                     })
                   }

              </tbody>
              </table>
              <div style={{display:this.state.loading==1?'block':'none'}}>数据加载中。。。。。</div>
              </div>
            </div>
            </div>
        );
    }
}
