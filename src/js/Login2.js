import React, { Component } from 'react';
import Footer from './Footer';
// import Navigation from './Navigation';

class Login2 extends Component {
    render() {
        return (
            <div>
                {/* <Navigation></Navigation> */}
                <div className="contrainer-login">
                    <div id="login-box">
                        <div className="left-box">
                            <h1>Sign Up</h1>
                            <input type="text" name="username" placeholder="Username" required />
                            <input type="email" name="email" placeholder="Email" required />
                            <input type="password" name="password" placeholder="Password" required />
                            <input type="password" name="password2" placeholder="Retype password" required />
                            <input type="submit" name="submit-btn" placeholder="Sign Up" required />
                        </div>
                        <div className="right-box">
                            <span className="Signinwith">Sign in with<br />Social Network
    </span>
                            <button className="social facebook">Login with Facebook</button>
                            <button className="social twitter">Login with Twitter</button>
                            <button className="social google">Login with Google+</button>
                        </div>
                        <div className="or">OR</div>
                    </div>

                </div>
                <Footer></Footer>
            </div>
        );
    }
}

export default Login2;