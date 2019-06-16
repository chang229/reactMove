import React, { Component } from 'react';
import './index.css';
import Header from '../common/header';

class Index extends Component {
    render(){
        return (
            <div className="contener">
                <Header />
                <h1>HELLO WORLD!!!!</h1>
            </div>
        )
    } 
}

export default Index;