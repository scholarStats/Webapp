import React, { Component } from 'react';
import ReactDOM, { render } from 'react-dom'

export default class App extends Component {
    render = () => {
        return (
            <div>
                <div id="title">
                    <h1 align="center">MENRBoys</h1>
                </div>
                <section id="timeSection">
                    <div id="lineCont">
                        <div className="row lineRow">
                            <div className="col">
                                <div id="span">2013</div>
                            </div>
                            <div className="col">
                                <div id="span">2014</div>
                            </div>
                            <div className="col">
                                <div id="span">2015</div>
                            </div>
                            <div className="col">
                                <div id="span">2016</div>
                            </div>
                            <div className="col">
                                <div id="span">2017</div>
                            </div>
                            <div className="col">
                                <div id="span">2018</div>
                            </div>
                            <div className="col">
                                <div id="span">2019</div>
                            </div>
                            <div className="col">
                                <div id="span">2020</div>
                            </div>
                            <div className="col">
                                <div id="span">2021</div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    };
}