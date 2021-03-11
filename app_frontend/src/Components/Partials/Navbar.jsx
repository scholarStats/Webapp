import React, { Component } from 'react';

export default class Navbar extends Component {
    render = () => {
        return (
            <nav class="navbar navbar-light fixed-top">
                <a class="navbar-brand" href="#">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/a/ab/Android_O_Preview_Logo.png" width="30" height="30" alt="" />
                    LOGO
                </a>
                <ul class="navbar-nav ml-auto">
                    <li class="nav-item">
                        <a class="nav-link" href="#">Login</a>
                    </li>
                </ul>
            </nav >
        )
    }
}