import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './ManagerNavigation.css';


class ManagerNavigation extends Component {

    handleLogout = () => {
        console.log('로그아웃 버튼 눌림');
        window.sessionStorage.clear();
        window.location.replace('/about');
    }

    render() {
        return (
            <div className="ManagerNav">
              <a target="_blank" className="ManagerNavInlineBlock">MERN 관리자 화면</a>
              <ul className="ManagerNavList">
                <li className="ManagerListItem ManagerNavInlineBlock">
                  <Link to="/product" className="nav-link">물품 관리</Link>
                </li>
                <li className="ManagerListItem ManagerNavInlineBlock">
                  <Link to="/list" className="nav-link">회원 관리</Link>
                </li >
                <li className="ManagerListItem ManagerNavInlineBlock">
                  <Link to="/order" className="nav-link">주문 관리</Link>
                </li>
              </ul>
              <a className="ManagerNavInlineBlock" onClick={() => this.handleLogout()}>로그아웃</a>
            </div>
        )
    }
}

export default ManagerNavigation;