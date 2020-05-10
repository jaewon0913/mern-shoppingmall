import React, { Component } from 'react';

class Content extends Component {
    render () {
        const style = {
            width : '70%',
            margin : '0 auto',
            align : 'center'
        }

        const info = {
            textAlign : 'center'
        }
        return (
            <div style = {style}>
                <div style = {info}>
                    <h1>MERN STACK STUDY</h1>
                    <hr/>
                    <span>MySQL | Express | React | Node</span>
                    <hr/>
                    <span>React/Node Site 2020 Created by Jaewon</span>
                </div>
            </div>
        );
    }
}

export default Content;