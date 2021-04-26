import React, { Component } from 'react';
import Navbar from '../Partials/Navbar'

class Dashboard extends Component {

    constructor(props) {
        super(props);

        this.state = {
            username: "Utente",
            todayView: "5",
            totalVote: "5",
            totalUser: "5"

        }
    }

    render = () => {
        return (
            <div>
                <Navbar />
                <section id="dashboardSection">
                    <div className="row row-100">
                        <div className="col-12 col-sm-12 col-lg-12 align-self-center w3-animate-left">
                            <div id="dashboardContainer">
                                <div className="card">
                                    <div className="card-header">
                                        <img src="https://upload.wikimedia.org/wikipedia/commons/a/ab/Android_O_Preview_Logo.png" width="90" height="90" alt="" />
                                        <h3>Bentornato {this.state.username}</h3>
                                    </div>
                                    <div className="card-header">
                                        <button className="btn btn-admin">Crea utente</button>
                                        <button className="btn btn-admin">Gestisci utenti</button>
                                        <button className="btn btn-multicolor">Inserisci voti</button>
                                        <div className="row">
                                            <div className="col-6">
                                                <button className="btn btn-multicolor"><i className="fas fa-user-edit"></i><h5>Modifica</h5></button>
                                            </div>
                                            <div className="col-6">
                                                <button className="btn btn-multicolor"><i className="fas fa-sign-out-alt"></i><h5>Disconnetti</h5></button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card-body">
                                        <div className="row">
                                            <div className="col">
                                                <h5>Utenti totali: <span id="statValue">{this.state.totalUser}</span></h5>
                                            </div>
                                            <div className="col">
                                                <h5>Visite oggi: <span id="statValue">{this.state.todayView}</span></h5>
                                            </div>
                                            <div className="col">
                                                <h5>Totale voti: <span id="statValue">{this.state.totalVote}</span></h5>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div align="center" id="arrowCont">
                        <a className="w3-animate-fading" href="#2" id="arrowIcon"><i className="fas fa-angle-down"></i></a>
                    </div>
                </section>
                <a name="2"></a>
                <section id="dashboardSection">
                    <div className="row row-100">
                        <div className="col-12 col-sm-12 col-lg-12 align-self-center w3-animate-left">
                            <div id="dashboardContainer">
                                <div id="listTitle">
                                    <h3>Ultimi caricamenti</h3>
                                </div>
                                <table className="table" id="voteList">
                                    <thead>
                                        <th>Data</th>
                                        <th>Voto</th>
                                        <th>Materia</th>
                                        <th>Sezione</th>
                                        <th>-</th>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>Data</td>
                                            <td>5</td>
                                            <td>Matematica</td>
                                            <td>Informatica</td>
                                            <td><a><h4><i className="fas fa-trash"></i></h4></a></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}

export default Dashboard;