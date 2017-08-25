/*
* @Author: anchen
* @Date:   2017-08-23 13:44:03
* @Last Modified by:   anchen
* @Last Modified time: 2017-08-25 09:18:32
*/
import React from 'react';
// 导入Link组件
import { Link } from 'react-router';

import './style/app.less';

// import NavLink from './NavLink';

export default class List extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            hover:null,
            open:props.open,
            liActive:props.active
        }
    };
    toggle(){
        if(this.state.open==1){
           this.setState({open:0})
        }else{
            this.setState({open:1})
        }
    };
    componentWillReceiveProps(nextProps) {
        console.log(nextProps)
        this.setState({liActive: nextProps.active});
    };

    checked(active){
            this.setState({liActive:''},() => {
                 console.log(this.state.liActive)
            })
           this.setState({liActive:active});
           this.props.onActive(active)
    };
    mouseOver(i){
          this.setState({hover:i})
    };
     mouseLeave(){
          this.setState({hover:false})
    };
    render() {
        const listDOM=[];
        // var Locations = this.props.ListDetail.map(function(result) {
        // return <li><Link to={result.path} activeStyle={{color: 'red'}} key={result.id} >{result.name}</Link></li>;
        //     })
        for (var value of this.props.ListDetail) {
            // console.log(value);
            listDOM.push(<li className="liStyle" onMouseOver={this.mouseOver.bind(this)}><Link to={value.path} key={value.path} activeStyle={{color: 'red'}}>{value.name}</Link></li>)
            }
        return (
                <li>
                <h4 onClick={this.toggle.bind(this)}>{this.props.Title.linkTitle}</h4>
                 <ul role="nav" className={this.state.open==1?'open':'close'}>
                 {
                     this.props.ListDetail.map((result,i)=> {
                     return <li className={ result.name+i==this.state.hover?'liStyle hover':'liStyle'} style={{background:this.state.liActive==result.name+"o"+i?'#5c6477':''}} key={"ListDetail"+i}  onMouseOver={this.mouseOver.bind(this,result.name+i)} onMouseLeave={this.mouseLeave.bind(this)} onClick={this.checked.bind(this,result.name+"o"+i)}><Link to={result.path} activeClassName="active" >{result.name}</Link></li>;
                     })
                 }
                </ul>
                </li>
        );
    }
}