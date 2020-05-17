import React, { Component } from 'react';

import './Login.css';

class Login extends Component {
    constructor(props) {
        super(props);

        this.state = {
            id: '',
            pw: ''
        };
    };

    //  아이디 입력창 관리
    handleIdChange = e => {
        this.setState({
            id: e.target.value
        });
    }

    //  비밀번호 입력창 관리
    handlePwChange = e => {
        this.setState({
            pw: e.target.value
        })
    }

    //  로그인 버튼 클릭 시 서버로 전송
    handleSubmit = e => {
        e.preventDefault();

        const login_info = {
            method: 'POST',
            body: JSON.stringify(this.state),
            header: {
                'Content-Type': 'application/json'
            }
        };

        fetch("/api/login", login_info)
            .then(res => {
                return res.json();
            })
            .then(json => {
                if(json.success === true){

                }
            })
    }

    render() {
        return (
            <div className = "LoginTab">
                <form onSubmit={this.handleSubmit}>
                    <input type = "text" placeholder = "id" value = {this.state.id} onChange={this.handleIdChange} />
                    <br/>
                    <input type = "password" placeholder = "Password" value = {this.state.pw} onChange={this.handlePwChange} />
                    <br/>

                    <button>아이디/비밀번호 찾기</button>
                    <button>회원가입</button>

                    <div className = "LoginBtn">
                        <button type = "submit">로그인</button>
                    </div>
                </form>
            </div>
        );
    }
}

export default Login;