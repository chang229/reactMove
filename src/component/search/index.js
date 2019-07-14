import React, { useState,useEffect } from 'react';
import { Link } from 'react-router-dom';
import { SearchBar } from 'antd-mobile';
import { _get } from '../../config/axios';
import './index.css';

function Search() {

    const [val,setVal] = useState('');

    useEffect(() => {
        _get('/movie/search',{params:{q:val}}).then((res) => {
            console.log(res);
        })
        console.log(val);
    })

    return (
        <div className="searchBox">
            <div className="searchBack">
                <Link to="/">关闭</Link>
            </div>
            <div className="searchIpt">
                <SearchBar 
                    onSubmit={value => setVal(value)}
                />
            </div>
        </div>
    )
}

export default Search;