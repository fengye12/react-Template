/*
* @Author: anchen
* @Date:   2017-08-23 09:38:24
* @Last Modified by:   anchen
* @Last Modified time: 2017-08-23 09:43:57
*/
import React from 'react'
import { Link } from 'react-router'

export default class NavLink extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <link {...this.props}="" activeclassname="active">
        );
    }
}