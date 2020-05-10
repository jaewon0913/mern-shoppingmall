import React, { Component } from 'react';

import './Login.css';

class Login extends Component {
    render() {
        return (
            <div className = "LoginTab">
                <form>
                    <input type = "text" id = "LoginId" placeholder = "id" />
                    <br/>
                    <input type = "password" id = "LoginPw" placeholder = "Password" />
                    <br/>

                    <button>아이디/비밀번호 찾기</button>
                    <button>회원가입</button>

                    <div className = "LoginBtn">
                        <a href="" >Login</a>
                    </div>
                </form>
            </div>
        );
    }
}

export default Login;