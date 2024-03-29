import React, { Component } from "react";
import Base from "./../../../Modules/Base";
import axios from "axios";
import Navbar from './../../Partials/Navbar';



class InsertUser extends Component {
    constructor(props) {
        super(props);

        this.state = {
            valoreEmail: ""
        };
    }

    changeHandler = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }

    submitHandle = (e) => {
        e.preventDefault();
        console.log(this.state);
        axios
            .post(`http://${Base.getIp()}:${Base.getPort()}/db/createUser`, { valoreEmail: this.state.valoreEmail })
            .then(() => {
                window.location.replace("/dashboard");
            })
    }

    render = () => {
        return (
            <div>
                <Navbar />
                <section id="formSection">
                    <form id="formInsert" className="w3-animate-zoom" onSubmit={this.submitHandle}>
                        <img src="https://upload.wikimedia.org/wikipedia/commons/a/ab/Android_O_Preview_Logo.png" width="50" height="50" alt="" />
                        <hr />
                        <div className="form-group">
                            <label htmlFor="valoreEmail">Inserisci email docente:</label>
                            <input type="email" name="valoreEmail" id="valoreEmail" placeholder="Email..." required onChange={this.changeHandler} value={this.state.valoreEmail}  />
                            <button className="btn" type="submit">Conferma</button>
                        </div>
                    </form>
                </section>
            </div>
        );
    };
}

export default InsertUser;
