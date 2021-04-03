import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import ErrorF from '../../Modules/ErrorF'

export default class Error extends Component {
    render = () => {
        return (
            <body>
                <div id="container-error">
                    <div className="content">
                        <h2>{ErrorF.getErrorValue()}</h2>
                        <h4>Error message</h4>
                        <p>Error message</p>
                        <Link to="/">
                            Back to Home
                      </Link>
                    </div>
                </div>
            </body>
        )};
}