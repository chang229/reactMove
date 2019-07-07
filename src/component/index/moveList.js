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
    source(val){
        if(val){
            return (
                <div>
                    <span className={val > 0 ? 'king' : 'kong'}></span>
                    <span className={val > 2 ? 'king' : 'kong'}></span>
                    <span className={val > 4 ? 'king' : 'kong'}></span>
                    <span className={val > 6 ? 'king' : 'kong'}></span>
                    <span className={val > 8 ? 'king' : 'kong'}></span>
                    <span className="average">{val}</span>
                </div>
            )
        }else{
            return '暂无评分'
        }
    }
    render(){
        return (
            <div>
                <ListHeader head={this.props.head} />
                <ul className="moveList">
                    {this.state.moveList.map((val,i) => (
                        <li key={i}>
                            <a href="javascript:;">
                                <img src={val.images.large} />
                                <p>{val.title.length > 5 ? val.title.substring(0,5) + '...' : val.title}</p>
                                <div className="ringStar">
                                    {this.source(val.rating.average)}
                                </div>
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        )
    }
}

export default List;