import React, { Component } from 'react';
import Navbar from '../Partials/Navbar'

class Dashboard extends Component {
    render = () => {
        return (
            <div>
                <Navbar />
                <section id="dashboardSection">
                    <div className="row row-100">
                        <div className="col-lg-6">
                            <div className="card">
                                <div className="card-header">
                                    <i class="fas fa-user-lock x-large"></i>
                                    <h3>ADMIN</h3>
                                </div>
                                <div className="card-body">
                                    <button className="btn btn-primary">Crea utente</button>
                                    <button className="btn btn-primary">Gestisci utenti</button>
                                    <button className="btn btn-primary">Inserisci voti</button>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="card">
                                <div className="card-header">
                                    <i class="fas fa-user-lock x-large"></i>
                                    <h3>ELENCO UTENTI</h3>
                                </div>
                                <div className="card-body user-">
                                    <table className="table">
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
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}

export default Dashboard;