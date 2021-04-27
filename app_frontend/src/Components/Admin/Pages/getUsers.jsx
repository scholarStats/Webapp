import React, { Component } from "react";
import Base from "./../../../Modules/Base";
import axios from "axios";
import Navbar from './../../Partials/Navbar';

class getUsers extends Component{
    render = () => {
        return(
        <div>
            <Navbar />
            <section id="dashboardSection">
                    <div className="row row-100">
                        <div className="col-12 col-sm-12 col-lg-12 align-self-center w3-animate-left">
                            <div id="dashboardContainer">
                                <div id="listTitle">
                                    <h3>Utenti</h3>
                                </div>
                                <table className="table" id="voteList">
                                    <thead>
                                        <th>Id</th>
                                        <th>Email</th>
                                        <th>Specializzazione</th>
                                        <th>-</th>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>1</td>
                                            <td>Rosso</td>
                                            <td>Matematica</td>
                                            <td><a><h4><i className="fas fa-trash"></i></h4></a></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </section>
        </div>)
    }
}

export default getUsers;
