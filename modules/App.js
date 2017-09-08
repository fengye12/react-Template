/*
* @Author: anchen
* @Date:   2017-08-22 15:36:00
* @Last Modified by:   anchen
* @Last Modified time: 2017-09-07 16:22:24
*/

import React from 'react';
// 导入Link组件
import { Link } from 'react-router';
import List from './List';
import './style/css/app.less';
// import NavLink from './NavLink';

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {open: true, active:'食品档案o0'}
    };
    toggle(){
      this.setState({open:!this.state.open})
      console.log( this.state.open)
    };
    activeChange(active){
        this.setState({active:active})
        console.log(active);
        this.render();
    };
    render() {
        const listData={linkTitle:"基础档案"}
        const listData1={linkTitle:"统计分析"}
        const listData2={linkTitle:"系统设置"}
       const linkList=[{path:"/about",name:"食品档案"},{path:"/repos",name:"企业档案"}]
       const linkList1=[{path:"/netS",name:"入网统计"},{path:"/baobeiS",name:"报备统计"}]
       const linkList2=[{path:"/account",name:"账号"},{path:"/organ",name:"机关信息"}]
       const open=[1,1,0];

        return (
            <div>
            <div className="leftNav">
                <ul>
                <List Title={listData} ListDetail={linkList} open={open[0]} active={this.state.active} onActive={this.activeChange.bind(this)}></List>
                <List Title={listData1} ListDetail={linkList1} open={open[1]} active={this.state.active} onActive={this.activeChange.bind(this)}></List>
                <List Title={listData2} ListDetail={linkList2} open={open[2]} active={this.state.active} onActive={this.activeChange.bind(this)}></List>
                </ul>
                </div>
                <div className="mainContainer">{this.props.children}</div>
            </div>
        );
    }
}
