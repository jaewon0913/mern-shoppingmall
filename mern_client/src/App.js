import React, { Component } from 'react';
import { BrowserRouter} from 'react-router-dom';

import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

import Header from './layout/Header';
import Navigation from './layout/Navigation';
import Bottom from './layout/Bottom';
import Routers from './route/Router';

import Manager from './layout/Manager';

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      id: ''
    };

    this.initializeUserInfo = this.initializeUserInfo.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
  }

  initializeUserInfo = async() => {
    const loggedUserId = window.sessionStorage.getItem('loggedUserId');
    console.log("appHeaderGetId :" + loggedUserId);
    if(!loggedUserId){
        return;
    } else {
        this.setState({
          id : loggedUserId
        })
        console.log("appsetHeaderId: " + this.state.id);
    }
  }

  handleLogout = () => {
    console.log('로그아웃 버튼 눌림');
    window.sessionStorage.clear();
    window.location.replace('/about');
  }

  componentDidMount() {
    this.initializeUserInfo();
  }

  render() {
    const { id } = this.state;

    if(id !== 'admin'){
      return(
        <BrowserRouter>
          <div className = "Layout">
            <Header />
            <Navigation />
                <Routers />
            <Bottom />
          </div>
        </BrowserRouter>
      );
    } else {
      return(
        <BrowserRouter>
            <Manager />
        </BrowserRouter>
      );
    }
  }
}

export default App;
