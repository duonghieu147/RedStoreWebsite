import React, { Component } from 'react';

class Footer extends Component {
    render() {
        return (
            <div className="footer">
                <div className="container">
                    <div className="row">
                        <div className="footer-col-1">
                            <h3>Download Our App</h3>
                            <p>Download App for Abdroid and ios mobile phone</p>
                            <div className="app-logo">
                                <img src="./images/play-store.png" alt="description"/>
                                <img src="./images/app-store.png" alt="description"/>
                            </div>
                        </div>
                        <div className="footer-col-2">
                            <img src="./images/logo-white.png" alt="description"/>
                            <p>Download App for Abdroid and ios mobile phone Download App for Abdroid and ios mobile phone</p>
                        </div>
                        <div className="footer-col-3">
                            <h3>Useful Links</h3>
                            <ul>
                                <li>Coupons</li>
                                <li>Blog Post</li>
                                <li>Return Policy</li>
                                <li>Join Affiliate</li>
                            </ul>
                        </div>
                        <div className="footer-col-4">
                            <h3>Follow us</h3>
                            <ul>
                                <li>Facebook</li>
                                <li>Twitter</li>
                                <li>Instagram</li>
                                <li>Youtube</li>
                            </ul>
                        </div>
                        <hr />
                        <p className="copyright">Copyright 2021 -RedStore</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default Footer;