import React, { Component } from 'react';
import { _get } from '../../config/axios';
import './index.css'


class ListHeader extends Component{
    render(){
        return (
            <div className="listHeader">
                <h2>{this.props.head}</h2>
                <a href="javascript:;">更多</a>
            </div>
        )
    }
}

class List extends Component{
    state={
        moveList: []
    };
    componentDidMount(){
        _get(this.props.url,{params:{start:0,count:8}}).then(res => {
            this.setState({
                moveList:res.subjects
            })
        })
    };
    render(){
        return (
            <div>
                <ListHeader head={this.props.head} />
                <ul className="moveList">
                    {this.state.moveList.map((val,i) => (
                        <li key={i}>
                            <a href="javascript:;">
                                <img src={val.images.large} />
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        )
    }
}

export default List;