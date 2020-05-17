import React, { Component } from 'react';
import { BrowserRouter as BrowserRouter } from 'react-router-dom';

import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

import Header from './layout/Header';
import Navigation from './layout/Navigation';
import Bottom from './layout/Bottom';
import Routers from './route/Router';


import logo from "./umc.jpg";

import List from "./component/manager/List";
import Update from "./component/manager/Update";
import Product from "./component/manager/Product";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className = "Layout">
          <Header />
          <Navigation />
              <Routers />
          <Bottom />
        </div>
      </BrowserRouter>
      // <Router>
      //   <div className="container">
      //     <nav className="navbar navbar-expand-lg navbar-light bg-light">
      //       <a className="navbar-brand" href="#" target="_blank">
      //         <img src={logo} width="30" height="30" alt="#" />
      //       </a>
      //       <Link to="/" className="navbar-brand">MERN 관리자 화면</Link>
      //       <div className="collpase navbar-collapse">
      //         <ul className="navbar-nav mr-auto">
      //           <li className="navbar-item">
      //             <Link to="/product" className="nav-link">물품 관리</Link>
      //           </li>
      //           <li className="navbar-item">
      //             <Link to="/member" className="nav-link">회원 관리</Link>
      //           </li>
      //           <li className="navbar-item">
      //             <Link to="/order" className="nav-link">주문 관리</Link>
      //           </li>
      //         </ul>
      //       </div>
      //     </nav>
      //     <br/>
      //     <Route path="/" exact component={List} />
      //     <Route path="/update/:id" component={Update} />
      //     <Route path="/product" component={Product} />
      //   </div>
      // </Router>
    );
  }
}

export default App;
