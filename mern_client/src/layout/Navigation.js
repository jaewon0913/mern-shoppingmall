import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './Navigation.css';

class Navigation extends Component {
    render() {
        return (
            <div className = "Nav">
                <ul className = "NavList">
                    <li className = "NavItem"><Link to='/about'>About Us</Link></li>
                    <li className = "NavItem"><Link to='/top'>Top</Link></li>
                    <li className = "NavItem">Bottom</li>
                    <li className = "NavItem">ETC.</li>
                    <li className = "NavItem"><Link to="/board">Board</Link></li>
                </ul>
            </div>
        );
    }
}

export default Navigation;