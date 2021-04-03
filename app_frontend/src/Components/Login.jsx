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
                            <h1>Login</h1>
                            <p>Inserisci le tue informazioni per accedere</p>
                            <hr />
                            <label for="email"><b>Email</b></label>
                            <input type="text" placeholder="Enter Email" name="email" required />

                            <label for="psw"><b>Password</b></label>
                            <input type="password" placeholder="Enter Password" name="psw" required />

                            <hr />
                            <button type="submit" id="signinbtn">Accedi</button>
                            <button id="cancelbtn">Registrati</button>
                        </div>
                    </form>
                </section>
            </body >
        )
    }
}