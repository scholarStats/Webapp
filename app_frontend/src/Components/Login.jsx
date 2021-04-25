import react, { Component } from 'react';
import Navbar from './Partials/Navbar'


export default class Login extends Component {
    render = () => {
        return (
            <body>
                <Navbar />
                <section id="loginCont">
                    <form className="modal-content w3-animate-zoom" action="/action_page.php">
                        <div className="container">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/a/ab/Android_O_Preview_Logo.png" width="90" height="90" alt="" />
                            <h1>Login</h1>
                            <p>Inserisci le tue informazioni per accedere</p>
                            <hr />
                            <label for="email"><b>Email</b></label>
                            <input type="text" placeholder="Enter Email" name="email" required />

                            <label for="psw"><b>Password</b></label>
                            <input type="password" placeholder="Enter Password" name="psw" required />

                            <hr />
                            <button type="submit" id="signinbtn">Accedi</button>
                        </div>
                    </form>
                </section>
            </body >
        )
    }
}