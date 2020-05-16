import React, { Component } from 'react';

class Top extends Component {

    constructor() {
        super();
        this.state = {data: []};
    }

    componentDidMount(){
        this.callApi()
            .then(res => this.setState({data: res}))
            .catch(err => console.log(err));
    }

    callApi = async() => {
        const response = await fetch('api/top');
        const body = await response.json();
        return body;
    }

    render() {
        return (
            <div>
                <h3>Mern Top Product List</h3>
                <table className = "table table-striped" style ={{marginTop: 20}}>
                    <thead>
                        <tr>
                            <th>번호</th>
                            <th>이름</th>
                            <th>가격</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.data.map(products => (
                            <tr key = {products.top_product_idx}>
                                <td>{products.top_product_idx}</td>
                                <td>{products.top_product_name}</td>
                                <td>{products.top_product_price}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        )
    }
}

export default Top;