import React, { Component } from 'react';

import './Bottom.css';

class Bottom extends Component {
    render(){
        return (
            <div className = "Container">
                <div className = "Element">
                    사업자 정보
                </div>
                <div className = "Element2">
                    위치 정보
                </div>
            </div>
        )
    }
}

export default Bottom;