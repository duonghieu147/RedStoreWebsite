import React, { Component } from 'react';

class Navigation extends Component {
    render() {
        return (

            <div className="navbar">
                <div className="max-width">
                    <div className="logo">
                        <img src="images/logo.png" with="125px" alt="description" />
                    </div>
                    <nav>
                        <ul id="MenuItems">
                            <li><a href='/'>Home</a></li>
                            <li><a href='/Products'>Products</a></li>
                            <li><a href='About'>About</a></li>
                            {/* <li><a href='Contact'>Contact</a></li> */}
                            <li><a href='Account'>Account</a></li>
                        </ul>
                    </nav>
                    <img src="./images/cart.png" with="30px" height="30px" alt="description" />
                    <img src="./images/menu.png" className="menu-icon" onclick="menutoggle()" alt="description" />

                </div>
            </div>

        );
    }
}

export default Navigation;