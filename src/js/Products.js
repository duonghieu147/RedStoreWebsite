import React, { Component } from 'react';
import dl from '../data-items.json';
import Item2 from './Item2';
import Navigation from './Navigation';

class Products extends Component {
  
  render() {
    console.log(this.props);
    console.log(dl.map(x=>x));
    return (
      <div>
        <Navigation></Navigation>
        <div className="small-container">
          <div className="row row-2">
            <h2>All Products</h2>
            <select>
              <option>Default Shorting</option>
              <option>Short by price</option>
              <option>Short by popularity</option>
              <option>Short by rating</option>
              <option>Short by sale</option>
            </select>
          </div>
          <div className="row">
            {
              dl.map((item, key) => {
                if (item.id === item.id) {
                  return ( 
                    <Item2
                      key={key} iditem2={item.id} title={item.name} img={item.imgurl} price={item.price}>      
                    </Item2>)
                }
                else{
                  return 0;
                }
              })
            }
          </div>
          <div className="page-btn">
            <span>1</span>
            <span>2</span>
            <span>3</span>
            <span>4</span>
            <span>→</span>
          </div>
        </div>
        {/* footer */}
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
        {/* --------js for toggle menu */}
      </div>
    );
  }
}

export default Products;