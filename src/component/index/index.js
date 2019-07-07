import React, { Component } from "react";
import "./index.css";
import Header from "../common/header";
import List from './moveList';
import { Carousel } from "antd-mobile";
import { _get } from '../../config/axios';

class Banner extends Component {
    state = {
        data: [1,2,3],
        imgHeight: 250
    };
    componentDidMount() {
        // simulate img loading
        _get('/movie/coming_soon',{params:{start:0,count:4}}).then((res) => {
            let imgArr = [];
            res.subjects.forEach((v,i) => {
                imgArr.push(v.images.large);
            })
            this.setState({
                data:imgArr
            })
        })
    }
    render() {
        return (
            <div className="bannerBox">
                <Carousel
                    autoplay={true}
                    infinite
                >
                    {this.state.data.map(val => (
                        <a
                            key={val}
                            href="jacascript:;"
                            style={{
                                display: "inline-block",
                                width: "100%",
                                height: this.state.imgHeight
                            }}
                        >
                            <img
                                src={val}
                                alt=""
                                style={{ width: "100%" }}
                            />
                        </a>
                    ))}
                </Carousel>
            </div>
        );
    }
}

class Index extends Component{
    render(){
        return (
            <div className="indexBox">
                <Header />
                <Banner />
                <List head="影院热映" url="/movie/new_movies" />
                <List head="正在上映" url="movie/in_theaters" />
                <List head="即将上映" url="/movie/coming_soon" />
                <List head="TOP250" url="/movie/top250" />
            </div>
        )
    }
}

export default Index;
