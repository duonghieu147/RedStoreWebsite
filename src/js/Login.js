import React, { Component } from 'react';

class Login extends Component {
    render() {
        return (
            <div className="container">
                <div className="container-login">
                    <div className="card">
                        <div className="inner-box" id="card">
                            <div className="card-front">
                                <h2>LOGIN</h2>
                                <form action>
                                    <input type="email" className="input-box" placeholder="Your Email Id" required />
                                    <input type="password" className="input-box" placeholder="Password" required />
                                    <button type="submit" className="submit-btn">Submit</button>
                                    <input type="checkbox" /><span>Remeber Me</span>
                                </form>
                                <button type="button" className="btn" onclick="openRegister()">I'm New Here</button>
                                <a href>Forgot Password</a>
                            </div>
                            <div className="card-back">
                                <h2>REGISTER</h2>
                                <form action>
                                    <input type="text" className="input-box" placeholder="Your Name" required />
                                    <input type="email" className="input-box" placeholder="Your Email Id" required />
                                    <input type="password" className="input-box" placeholder="Password" required />
                                    <button type="submit" className="submit-btn">Submit</button>
                                    <input type="checkbox" /><span>Remeber Me</span>
                                </form>
                                <button type="button" className="btn" onclick="openLogin()">I've a account'</button>
                                <a href>Forgot Password</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Login;