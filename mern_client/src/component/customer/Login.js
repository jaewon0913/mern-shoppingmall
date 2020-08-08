import React, { Component } from 'react';

import './Login.css';

class Login extends Component {
    constructor(props) {
        super(props);

        this.state = {
            id: '',
            pw: '',
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleValueChange = this.handleValueChange.bind(this);

    };    

    handleValueChange(e) {
        let nextState = {};
        nextState[e.target.name] = e.target.value;
        this.setState(nextState);
    }

    //  로그인 버튼 클릭 시 서버로 전송
    handleSubmit = e => {
        e.preventDefault();

        this.postLogin();
    }

    postLogin = async() => {
        const url = 'api/login';
        const data = {
            userid : this.state.id,
            userpw : this.state.pw
        };

        await fetch(url, {
            method : 'POST',
            body : JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(res => res.json())
        .then((response) => {
            console.log('Success::::', response);
            if(response === null){
                alert("해당하는 계정이 없습니다. 다시 확인해주세요.");
                this.setState({
                    id: '',
                    pw: ''
                })
            } else {
                const resData = JSON.stringify(response);
                const jsonData = JSON.parse(resData);
                if(jsonData.mem_userid === this.state.id){
                    console.log("로그인 성공");
                    window.sessionStorage.setItem('loggedUserId', jsonData.mem_userid);
                    window.location.replace('/');
                    //this.props.history.push("/about");
                }
            }
        })
        .catch(error => console.error('Error::::', error));
    }

    render() {
        return (
            <div className = "LoginTab">
                <form onSubmit={this.handleSubmit}>
                    <input type = "text" name = "id" placeholder = "id" value = {this.state.id} onChange={this.handleValueChange} />
                    <br/>
                    <input type = "password" name = "pw" placeholder = "Password" value = {this.state.pw} onChange={this.handleValueChange} />
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