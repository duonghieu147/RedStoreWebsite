import React, { Component } from 'react';
import Footer from './Footer';
import Item0 from './Item0';
import Item2 from './Item2';
import Navigation from './Navigation';


class Product_Details extends Component {
  render() {
    return (
      <div>
        <div className="container">
          <Navigation></Navigation>
        </div>
        {/* </div> */}
        {/*----single product details */}
        <Item0></Item0>
        {/*---title----*/}
        <div className="small-container">
          <div className="row row-2" />
          <h2>Related Products</h2>
          <p>More View</p>
        </div>
        {/*---products----*/}
        <div className="small-container">
          <div className="row">
            <Item2></Item2>
            <Item2></Item2>
            <Item2></Item2>
            <Item2></Item2>
          </div>
        </div>
        {/* footer */}
        <Footer></Footer>
        {/* --------js for toggle menu */} 
        {/* -----js for product gallery  */}

      </div>
    );
  }
}

export default Product_Details;