import React, { Component } from 'react';
import Navbar from './Partials/Navbar';
import Footer from './Partials/Footer';
import Base from './../Modules/Base';
import Chart from './../Modules/Chart'



export default class Year extends Component {
    componentDidMount() {
        Chart.createChartDoughnut();
        Chart.createChartLine();
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
                                            <h5>Voti maggiori di 8</h5> <span id="statvaluepositive">20</span>
                                        </div>
                                        <div className="col-6 col-lg-4 ele">
                                            <h5>Voti maggiori di 6</h5> <span id="statevaluenegative">65</span>
                                        </div>
                                        <div className="col-lg-2"></div>
                                        <div className="col-lg-2"></div>
                                        <div className="col-6 col-lg-4 ele">
                                            <h5>Δ voti</h5> <span id="statvaluepositive">+3,8%</span>
                                        </div>
                                        <div className="col-6 col-lg-4 ele">
                                            <h5>Media totale</h5> <span id="statvaluepositive">8.2</span>
                                        </div>
                                        <div className="col-lg-2"></div>
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
                        <h3>Andamento mensile {Base.getYear()}</h3>
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
                                            <h5>Voto medio (tutti i mesi compresi)</h5> <span id="statvaluepositive">+3,8%</span>
                                        </div>
                                        <div className="col-6 col-lg-4 ele">
                                            <h5>Mese con media maggiore</h5> <span id="statevaluenegative">GENNAIO</span>
                                        </div>
                                        <div className="col-lg-2"></div>
                                        <div className="col-lg-2"></div>
                                        <div className="col-6 col-lg-4 ele">
                                            <h5>Mese con media peggiore</h5> <span id="statvaluepositive">MARZO</span>
                                        </div>
                                        <div className="col-6 col-lg-4 ele">
                                            <h5>Periodo scolastico migliore</h5> <span id="statvaluepositive">PENT</span>
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

