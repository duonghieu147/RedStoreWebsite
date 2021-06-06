import React, { Component } from 'react';
// import '../App';
class Item2 extends Component {
    // constructor(props) {
    //     super(props);
        
    // }
    render() {
        return (
            <div className="col-4">
                <a href={'/Product-details/'+this.props.id}>
                    <img src={this.props.img} alt="description" />
                    <h4>{this.props.title}</h4>
                    <div className="rating">
                        <i className="fa fa-star" />
                        <i className="fa fa-star" />
                        <i className="fa fa-star" />
                        <i className="fa fa-star" />
                        <i className="fa fa-star" />
                    </div>
                    <p>${this.props.price}</p>
                </a>
            </div>
        );
    }
}

export default Item2;