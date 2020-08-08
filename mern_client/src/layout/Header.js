import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './Header.css';

const API_KEY = '364cb38bbe1103844106eaeb83ab9267';

class Header extends Component {
    constructor(props){
        super(props);

        this.state = {
            lat: 0,
            lon: 0,
            temperature: 0,
            name: '',
            icon: '',
            id: ''
        };

        this.initializeUserInfo = this.initializeUserInfo.bind(this);
        this.getPosition = this.getPosition.bind(this);
        this.getWeather = this.getWeather.bind(this);
        this.handleLogout = this.handleLogout.bind(this);

    }

    initializeUserInfo = async() => {
        const loggedUserId = window.sessionStorage.getItem('loggedUserId');
        console.log("HeaderGetId :" + loggedUserId);
        if(!loggedUserId){
            return;
        } else {
            this.setState({
                id : loggedUserId
            });
            console.log("setHeaderId: " + this.state.id);
        }
    }

    getPosition = async() => {
        const options = {
            timeout: 10000,
            enableHighAccuracy: true,
            maximunAge: 0
        };

        if(navigator.geolocation){
            navigator.geolocation.getCurrentPosition((position) => {
                this.setState({
                    lat: position.coords.latitude,
                    lon: position.coords.longitude
                });
            }, (error) => {
                console.log(error);
            },options);
        }
        this.getWeather();
    }

    getWeather = async() => {
        fetch(`http://api.openweathermap.org/data/2.5/weather?q=Seoul&APPID=${API_KEY}`)
            .then(response => response.json())
            .then(json => {
                this.setState({
                    temperature: Math.floor(json.main.temp - 273.15),
                    name: json.weather[0].main,
                    icon: json.weather[0].icon,
                });
            });
    }

    handleLogout = () => {
        console.log('로그아웃 버튼 눌림');
        window.sessionStorage.clear();
        window.location.replace('/about');
    }


    componentDidMount() {        
        this.getPosition();
        this.initializeUserInfo();
    }

    componentDidCatch(error, info) {
        console.error(error, info);
      }

    render(){
        const { temperature, name, icon, id } = this.state;
        const img_url = `http://openweathermap.org/img/w/${icon}.png`;

        return (
            <div className = "Container">
                <div className = "Search">
                    <h1>MERN shopping mall</h1>
                </div>
                <div className = "Element">
                    <div className = "Weather">
                        <img alt= "weather_icon" src = {img_url} />
                        &nbsp;&nbsp;
                        <span>온도 : {temperature} ℃</span>
                        &nbsp;&nbsp;&nbsp;
                        <span>날씨 : {name}</span>
                    </div>
                    {
                    (()=> {
                        if(id !== ''){
                            return (
                                <div className = "ShortCut">
                                    <Link to="/myinfo">{id}</Link>님 환영합니다.&nbsp;&nbsp;&nbsp;
                                    <a href='#' onClick={() => this.handleLogout()}>로그아웃</a>
                                </div>
                            );
                        } else {
                            return (
                                <div className = "ShortCut">
                                <Link to="/login">로그인</Link>&nbsp;&nbsp;&nbsp;
                                <Link to="/newmember">회원가입</Link>
                                </div>
                            );
                        }
                    })()
                    }
                </div>
            </div>
        );
    }
}

export default Header;