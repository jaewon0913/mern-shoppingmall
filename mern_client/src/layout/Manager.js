import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import logo from "../umc.jpg";

import ManagerNavigation from './ManagerNavigation';
import ManagerRouters from '../route/ManagerRouter';

class Manager extends Component {

    render() {
        return(
            <div className="container">   
                <ManagerNavigation />
                    <ManagerRouters />
                <br/>
            </div>
        );
    }
}

export default Manager;