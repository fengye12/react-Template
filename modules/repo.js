/*
* @Author: anchen
* @Date:   2017-08-23 09:50:54
* @Last Modified by:   anchen
* @Last Modified time: 2017-08-23 09:51:18
*/

import React from 'react';

export default class Repo extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                 //编辑器问题h2标签添加了空格，复制代码请自行删除空格
                 <h2>{this.props.params.repoName}</h2>
            </div>
        );
    }
}