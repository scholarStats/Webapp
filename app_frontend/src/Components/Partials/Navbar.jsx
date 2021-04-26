import React, { Component } from 'react';
import { Link } from 'react-router-dom'

export default class Navbar extends Component {
    render = () => {
        return (
            <nav className="navbar navbar-light fixed-top">
                <Link to="/">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/a/ab/Android_O_Preview_Logo.png" width="30" height="30" alt="" />
                     Schoolarstats
                </Link>
                <ul className="navbar-nav ml-auto">
                    <Link to="/Login">
                    <li className="nav-item">
                        <i className="fas fa-user"></i> Area Riservata
                    </li>
                    </Link>
                </ul>
            </nav >
        )
    }
}