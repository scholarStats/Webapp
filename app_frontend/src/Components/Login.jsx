import react, { Component } from 'react';
import Navbar from './Partials/Navbar'

export default class Login extends Component {
    render = () => {
        return (
            <body>
                <Navbar />
                <section id="loginCont">
                <form class="modal-content" action="/action_page.php">
                    <div class="container">
                        <h1>Login</h1>
                        <p>Compilare il modulo per creare un account.</p>
                        <hr />
                        <label for="email"><b>Email</b></label>
                        <input type="text" placeholder="Enter Email" name="email" required />

                        <label for="psw"><b>Password</b></label>
                        <input type="password" placeholder="Enter Password" name="psw" required />

                        <label for="psw-repeat"><b>Repeat Password</b></label>
                        <input type="password" placeholder="Repeat Password" name="psw-repeat" required />

                        <label>
                            <input type="checkbox" checked="checked" name="remember"/> Remember me
                        </label>
                        <div class="clearfix">
                            <button type="button" class="cancelbtn">Cancel</button>
                            <button type="submit" class="signupbtn">Sign Up</button>
                        </div>
                    </div>
                </form>
                </section>
            </body >
        )
    }
}