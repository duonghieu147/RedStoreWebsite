import React, { Component } from 'react';
import Footer from './Footer';
import Item0 from './Item0';
import Item2 from './Item2';
import Navigation from './Navigation';
import dl from '../data-items.json';



class Product_Details extends Component {

  render() {
    console.log(this.props); 
    return (
      <div>      
        <Navigation></Navigation>      
        {/*----single product details */}
        <div className="small-container single-product">
        {
          dl.map((item, key) => {
            if (item.id == 2) {
              return ( 
                <Item0 key={key} type={item.type} title={item.name} imgmain={item.imgurl} price={item.price} content={item.content}>      
                </Item0>)
            }
          })
        }
        </div>
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
      </div>
    );
  }
}

export default Product_Details;