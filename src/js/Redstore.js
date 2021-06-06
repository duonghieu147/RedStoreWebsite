import React, { Component } from 'react';
import dl from '../data-items.json';
import cmt from '../data-cmt.json';
import Item1 from './Item1';
import Item2 from './Item2';
import Item3 from './Item3';
import Cmt1 from './Cmt1';
import Brand from './Brand';
import Footer from './Footer';



class Redstore extends Component {
    // constructor(props) {
    //     super(props);
    // }
    render() {
        return (
            <div>
                <div className="header">
                    <div className="container">
                        <div className="navbar">
                            <div className="logo">
                                <img src="images/logo.png" with="125px" alt="description" />
                            </div>
                            <nav>
                                <ul id="MenuItems">
                                    <li><a href="/">Home</a></li>
                                    <li><a href="Products">Products</a></li>
                                    <li><a href="About">About</a></li>
                                    <li><a href="Contact">Contact</a></li>
                                    <li><a href="Account">Account</a></li>
                                </ul>
                            </nav>
                            <img src="./images/cart.png" with="30px" height="30px" alt="description"/>
                            <img src="./images/menu.png" className="menu-icon" onclick="menutoggle()" alt="description"/>
                        </div>
                        <div className="row">
                            <div className="col-2">
                                <h1>Why Not Me ?<br />I Not Her!</h1>
                                <p>It's been a long day without you, my friend And I'll tell you all about it when I see you again
                                We've
                                come a long way from where we began
            <br />Oh, I'll tell you all about it when I see you again When I see you again
          </p>
                                <a href className="btn">Explore Now →</a>
                            </div>
                            <div className="col-2">
                                <img src="./images/image1.png" alt="description"/>
                            </div>
                        </div>
                    </div>
                </div>
                {/* ----- featured categories */}
                <div className="categories">
                    <div className="small-container">
                        <div className="row">
                            <Item1 imgcategory="./images/category-1.jpg"></Item1>
                            <Item1 imgcategory="./images/category-2.jpg"></Item1>
                            <Item1 imgcategory="./images/category-3.jpg"></Item1>
                        </div>
                    </div>
                </div>
                <div className="small-container">
                    <h2 className="title">Featured Products</h2>
                    <div className="row">
                        {
                            dl.map((item, key) => {
                                if (item.id <= 8) {
                                    return (
                                        <Item2
                                            key={key} id={this.id} title={item.name} img={item.imgurl} price={item.price}>
                                        </Item2>)
                                }
                            })
                        }
                    </div>
                    {/* Latest Products */}
                    <h2 className="title">Latest Products</h2>
                    <div className="row">
                        {
                            dl.map((item, key) => {
                                if (item.id > 8) {
                                    return (
                                        <Item2
                                            key={key} id={this.id} title={item.name} img={item.imgurl} price={item.price}>
                                        </Item2>)
                                }
                            })
                        }
                    </div>
                </div>
                {/* offer */}
                <Item3></Item3>
                {/* testimonial/cmt uers */}
                <div className="testimonial">
                    <div className="small-container">
                        <div className="row">
                        {
                            cmt.map((Cmt, key) => {
                                if (true) {
                                    return (
                                        <Cmt1 user={Cmt.user} cmt={Cmt.cmt} imguser={Cmt.imguser} ></Cmt1>)
                                }
                            })
                        }
                        </div>
                    </div>
                </div>
                {/* brands */}
                <Brand></Brand>
                {/* footer */}
                <Footer></Footer>
                {/* --------js for toggle menu */}
            </div>
        );
    }
}

export default Redstore;