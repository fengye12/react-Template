/*
* @Author: anchen
* @Date:   2017-08-22 15:36:00
* @Last Modified by:   anchen
* @Last Modified time: 2017-08-23 09:57:00
*/
import React from 'react';
import { Link } from 'react-router'

export default class Repos extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
            <h2>Repos</h2>
             <ul>
             <li><Link to="/repos/reactjs/react-router">React Router</Link></li>
             <li><Link to="/repos/facebook/react">React</Link></li>
                </ul>
            </div>
        );
    }
}