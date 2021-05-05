import React, { Component } from 'react';
import Navbar from './Partials/Navbar';
import Footer from './Partials/Footer';
import Base from './../Modules/Base';
import Chart from './../Modules/Chart'
import axios from 'axios';

export default class Year extends Component {

    constructor(props) {
        super(props);

        this.state = {
            avg: 0,
            major: 0,
            minor: 0,
            bestMonth: "",
            worstMonth: "",
            avgMonth: 0,
            bestPeriod: ""
        }

    }

    componentDidMount() {
        axios.get(`http://${Base.getIp()}:${Base.getPort()}/db/collectionMarks/${Base.getYear()}`)
            .then((res) => {
                this.setState({ avg: res.data[0][0].mar_avg, major: res.data[0][0].mar_major, minor: res.data[0][0].mar_minor, bestMonth: Chart.getBestMonth(res.data[1][0]), worstMonth: Chart.getWorstMonth(res.data[1][0]), avgMonth: Chart.getAvg(res.data[1][0]), bestPeriod: Chart.getBestPeriod(res.data[1][0]) });
                Chart.createChartDoughnut(res.data[0][0]);
                Chart.createChartLine(res.data[1][0]);
            })

        
        Chart.createChartBar();
    }

    render = () => {
        return (
            <div>
                <Navbar />
                <section id="chartSection">
                    <div id="chartTitle">
                        <h3>Voti ottenuti nel {Base.getYear()}</h3>
                    </div>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6">
                                <canvas id="chartDoughnut">You need to enable JS</canvas>
                            </div>
                            <div className="col-lg-6">
                                <div id="statcard">
                                    <div className="row" align="center">
                                        <div className="col-lg-2"></div>
                                        <div className="col-6 col-lg-4 ele">
                                            <h4>Voti maggiori <br /> di 8</h4> <span id="statvaluepositive">{this.state.major}</span>
                                        </div>
                                        <div className="col-6 col-lg-4 ele">
                                            <h4>Voti minori di <br />6</h4> <span id="statevaluenegative">{this.state.minor}</span>
                                        </div>
                                        <div className="col-12 col-lg-12 ele">
                                            <h4>Media totale</h4> <span id="statvaluepositive">{this.state.avg}</span>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                    <div align="center" id="arrowCont">
                        <a className="w3-animate-fading" href="#2" id="arrowIcon"><i class="fas fa-angle-down"></i></a>
                    </div>
                </section>
                <a name="2"></a>
                <section id="chartSection">
                    <div id="chartTitle">
                        <h3>Andamento mensile</h3>
                    </div>
                    <div className="container">
                        <div className="row" align="center">
                            <div className="col-lg-6">
                                <canvas id="chartLine">You need to enable JS</canvas>
                            </div>
                            <div className="col-lg-6">
                                <div id="statcard">
                                    <div className="row">
                                        <div className="col-lg-2"></div>
                                        <div className="col-6 col-lg-4 ele">
                                            <h5>Voto medio (tutti i mesi compresi)</h5> <span id="statvaluepositive">{this.state.avgMonth}</span>
                                        </div>
                                        <div className="col-6 col-lg-4 ele">
                                            <h5>Mese con media migliore</h5> <span id="statevaluenegative">{this.state.bestMonth}</span>
                                        </div>
                                        <div className="col-lg-2"></div>
                                        <div className="col-lg-2"></div>
                                        <div className="col-6 col-lg-4 ele">
                                            <h5>Mese con media peggiore</h5> <span id="statvaluepositive">{this.state.worstMonth}</span>
                                        </div>
                                        <div className="col-6 col-lg-4 ele">
                                            <h5>Periodo scolastico migliore</h5> <span id="statvaluepositive">{this.state.bestPeriod}</span>
                                        </div>
                                        <div className="col-lg-2"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section id="chartSection">
                    <div id="chartTitle">
                        <h3>Specializzazioni nel {Base.getYear()}</h3>
                    </div>
                    <div className="container">
                        <div className="row" align="center">
                            <div className="col-lg-6">
                                <canvas id="chartBar">You need to enable JS</canvas>
                            </div>
                            <div className="col-lg-6">
                                <div id="statcard">
                                    <div className="row">
                                        <div className="col-lg-2"></div>
                                        <div className="col-6 col-lg-4 ele">
                                            <h5>TOTALE ISCRITTI</h5> <h3 id="statvaluepositive">+3,8%</h3>
                                        </div>
                                        <div className="col-6 col-lg-4 ele">
                                            <h5>DIFF ANNO PRECEDENTE</h5> <h3 id="statevaluenegative">-3,8%</h3>
                                        </div>
                                        <div className="col-lg-2"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <Footer />
            </div>
        )
    };
}

