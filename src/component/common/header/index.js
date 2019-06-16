import React, { Component } from 'react';
import './index.css';

import { Icon } from 'antd-mobile';

class Header extends Component {
    render(){
        return (
            <header className="header">
                <span>兰梓</span>
                <Icon type="search" color="#42bd56" />
            </header>
        )
    }
}

export default Header;