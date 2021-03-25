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
                    <li class="nav-item">
                        <a class="nav-link" href="#">Login</a>
                    </li>
                </ul>
            </nav >
        )
    }
}