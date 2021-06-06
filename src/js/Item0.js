import React, { Component } from 'react';

class Item0 extends Component {
    // constructor(props) {
    //     super(props);
        
    // }
    
    render() {
        return (
            <div className="small-container single-product">
                <div className="row">
                    <div className="col-2" id="col-2-product-img">
                        <img src="./images/gallery-1.jpg" width="100%" id="ProductImg" alt="description"/>
                        <div className="small-img-row">
                            <div className="small-img-col">
                                <img src="./images/gallery-1.jpg" width="100%" className="small-img" alt="description"/>
                            </div>
                            <div className="small-img-col">
                                <img src="./images/gallery-2.jpg" width="100%" className="small-img" alt="description"/>
                            </div>
                            <div className="small-img-col">
                                <img src="./images/gallery-3.jpg" width="100%" className="small-img" alt="description"/>
                            </div>
                            <div className="small-img-col">
                                <img src="./images/gallery-4.jpg" width="100%" className="small-img" alt="description"/>
                            </div>
                        </div>
                    </div>
                    <div className="col-2">
                        <p>Home / {this.type}</p>
                        <h1>{this.title}</h1>
                        <h4>${this.price}</h4>
                        <select name id>
                            <option> Select Size</option>
                            <option> XXL</option>
                            <option> XL</option>
                            <option> Large</option>
                            <option> Medium</option>
                            <option> Small</option>
                        </select>
                        <input type="number" defaultValue={1} />
                        <a href className="btn">Add To Cart</a>
                        <h3>Product Details <i className="fa fa-indent" /></h3>
                        <br />
                        <p>{this.content}
        </p>
                    </div>
                </div>
            </div>

        );
    }
}

export default Item0;