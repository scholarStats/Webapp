import React, { Component } from "react";
import Base from "./../../../Modules/Base";
import axios from "axios";
import Navbar from './../../Partials/Navbar';

class getUsers extends Component {

    constructor(props) {
        super(props);

        this.state = {
            users: []
        }
    }

    componentDidMount = () => {
        axios.get(`http://${Base.getIp()}:${Base.getPort()}/db/getUsers`)
            .then(res => {
                this.setState({ users: res.data });
            });
    }

    render = () => {
        return (
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
                                        <th>-</th>
                                    </thead>
                                    <tbody>
                                        {
                                            this.state.users.map((ele) => {
                                                return (
                                                    <tr>
                                                        <td>{ele.usr_id}</td>
                                                        <td>{ele.usr_email}</td>
                                                        <td><a><i class="fas fa-trash"></i></a></td>
                                                    </tr>
                                                )
                                            })
                                        }
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
