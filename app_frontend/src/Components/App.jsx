import React, { Component } from 'react';
import { Link } from 'react-router-dom'

export default class App extends Component {
    render = () => {
        return (
            <div>
                <div id="title">
                    <h1 align="center">MERNBoys</h1>
                    <div id="desc">
                        <p align="center">Seleziona anno</p>
                    </div>
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
            </div>
        )
    };
}