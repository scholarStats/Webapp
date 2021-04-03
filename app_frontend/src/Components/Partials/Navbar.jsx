import React, { Component } from 'react';
import { Link } from 'react-router-dom'

export default class Navbar extends Component {
    render = () => {
        return (
            <nav class="navbar navbar-light fixed-top">
                <Link to="/">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/a/ab/Android_O_Preview_Logo.png" width="30" height="30" alt="" />
                    LOGO
                </Link>
                <ul class="navbar-nav ml-auto">
                    <Link to="/Login">
                    <li class="nav-item">
                        <a class="nav-link" href="#"><i class="fas fa-user"></i> Area Riservata</a>
                    </li>
                    </Link>
                </ul>
            </nav >
        )
    }
}