import React, { Component } from 'react';

class Cmt1 extends Component {
    // constructor(props) {
    //     super(props);
        
    // }
    
    render() {
        return (
            <div className="col-3">
                <i className="fa fa-quote-left" />
                <p>{this.props.cmt}</p>
                <div className="rating">
                    <i className="fa fa-star" />
                    <i className="fa fa-star" />
                    <i className="fa fa-star" />
                    <i className="fa fa-star" />
                    <i className="fa fa-star-o" />
                </div>
                <img src={this.props.imguser} alt="description" />
                <h3>{this.props.user}</h3>
            </div>
        );
    }
}

export default Cmt1;