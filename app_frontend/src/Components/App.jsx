import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import axios from 'axios'
import Navbar from './Partials/Navbar'
import Footer from './Partials/Footer'

export default class App extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            message : "Scholar Stats"
        }
    }

    componentDidMount = () => {
        axios.get("http://localhost:9000/" , {
            request: "a simple message"
        }).catch(err => {
            console.error(err);
        }).then((res) => {
            console.log(res);
        })
    }

    render = () => {
        return (
            <div>
                <Navbar />
                <div id="title">
                    <h1 align="center">{this.state.message}</h1>   
                </div>
                <section id="timeSection">
                    <div id="lineCont">
                        <div className="row lineRow">
                            <div className="col">
                                <Link to="/year/2013">
                                    <div id="span">2013</div>
                                </Link>
                            </div>
                            <div className="col">
                                <Link to="/year/2014">
                                    <div id="span">2014</div>
                                </Link>
                            </div>
                            <div className="col">
                                <Link to="/year/2015">
                                    <div id="span">2015</div>
                                </Link>
                            </div>
                            <div className="col">
                                <Link to="/year/2016">
                                    <div id="span">2016</div>
                                </Link>
                            </div>
                            <div className="col">
                                <Link to="/year/2017">
                                    <div id="span">2017</div>
                                </Link>
                            </div>
                            <div className="col">
                                <Link to="/year/2018">
                                    <div id="span">2018</div>
                                </Link>
                            </div>
                            <div className="col">
                                <Link to="/year/2019">
                                    <div id="span">2019</div>
                                </Link>
                            </div>
                            <div className="col">
                                <Link to="/year/2020">
                                    <div id="span">2020</div>
                                </Link>
                            </div>
                            <div className="col">
                                <Link to="/year/2021">
                                    <div id="span">2021</div>
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>
                <Footer />
                
            </div>
        )
    };
}