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
                        <div className="col-12 col-sm-12 col-lg-6 align-self-center w3-animate-left">
                            <div className="container">
                                <div className="card">
                                    <div className="card-header">
                                        <img src="https://upload.wikimedia.org/wikipedia/commons/a/ab/Android_O_Preview_Logo.png" width="90" height="90" alt="" />
                                        <h3>Bentornato {this.state.username}</h3>
                                    </div>
                                    <div className="card-header">
                                        <button className="btn btn-multicolor">Crea utente</button>
                                        <button className="btn btn-multicolor">Gestisci utenti</button>
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
                                                <span>Utenti totali: {this.state.totalUser}</span>
                                            </div>
                                            <div className="col">
                                                <span>Visite oggi: {this.state.todayView}</span>
                                            </div>
                                            <div className="col">
                                                <span>Totale voti: {this.state.totalVote}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 align-self-center only-desktop w3-animate-right">
                            <div className="container">
                                <div className="card">
                                    <div className="card-header">
                                        <i className="fas fa-user-lock x-large"></i>
                                        <h3>ELENCO UTENTI</h3>
                                    </div>
                                    <div className="card-body">
                                        <table className="table" id="userList">
                                            <thead>
                                                <th>#</th>
                                                <th>Nome utente</th>
                                                <th>Tipo di utente</th>
                                            </thead>
                                            <tbody>
                                                {/* Da implementare con il DB */}
                                                <tr>
                                                    <td>1</td>
                                                    <td>admin@admin.com</td>
                                                    <td>Admin</td>
                                                </tr>
                                                <tr>
                                                    <td>1</td>
                                                    <td>admin@admin.com</td>
                                                    <td>Admin</td>
                                                </tr>
                                                <tr>
                                                    <td>1</td>
                                                    <td>admin@admin.com</td>
                                                    <td>Admin</td>
                                                </tr>
                                                <tr>
                                                    <td>1</td>
                                                    <td>admin@admin.com</td>
                                                    <td>Admin</td>
                                                </tr>
                                                <tr>
                                                    <td>1</td>
                                                    <td>admin@admin.com</td>
                                                    <td>Admin</td>
                                                </tr>
                                                <tr>
                                                    <td>1</td>
                                                    <td>admin@admin.com</td>
                                                    <td>Admin</td>
                                                </tr>
                                                <tr>
                                                    <td>1</td>
                                                    <td>admin@admin.com</td>
                                                    <td>Admin</td>
                                                </tr>
                                                <tr>
                                                    <td>1</td>
                                                    <td>admin@admin.com</td>
                                                    <td>Admin</td>
                                                </tr>
                                                <tr>
                                                    <td>1</td>
                                                    <td>admin@admin.com</td>
                                                    <td>Admin</td>
                                                </tr>
                                                <tr>
                                                    <td>1</td>
                                                    <td>admin@admin.com</td>
                                                    <td>Admin</td>
                                                </tr>
                                                <tr>
                                                    <td>1</td>
                                                    <td>admin@admin.com</td>
                                                    <td>Admin</td>
                                                </tr>
                                                <tr>
                                                    <td>1</td>
                                                    <td>admin@admin.com</td>
                                                    <td>Admin</td>
                                                </tr>
                                                <tr>
                                                    <td>1</td>
                                                    <td>admin@admin.com</td>
                                                    <td>Admin</td>
                                                </tr>
                                            </tbody>
                                        </table>
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

                </section>
            </div>
        )
    }
}

export default Dashboard;