import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

class Navigation extends Component {
    render() {
        return (

            <div className="navbar">
                <div className="max-width">
                    <div className="logo">
                        <img src="/images/logo.png" with="125px" alt="description" />
                    </div>
                    <nav>
                        <ul id="MenuItems">
                            <li><Link to='/'>Home</Link></li>
                            <li><Link to='/Products'>Products</Link></li>
                            <li><Link to='/About'>About</Link></li>
                            {/* <li><a href='Contact'>Contact</a></li> */}
                            <li><Link to='/Account'>Account</Link></li>
                        </ul>
                    </nav>
                    <img src="/images/cart.png" with="30px" height="30px" alt="description" />
                    <img src="/images/menu.png" className="menu-icon" onclick="menutoggle()" alt="description" />
                </div>
            </div>

        );
    }
}

export default Navigation;