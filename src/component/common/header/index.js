import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './index.css';

import { Icon } from 'antd-mobile';

class Header extends Component {
    render(){
        return (
            <div className="fixHead">
                <header className="header">
                    <span>兰梓</span>
                    <Link to="/search">
                        <Icon type="search" color="#42bd56" />
                    </Link>
                </header>
            </div>
        )
    }
}

export default Header;