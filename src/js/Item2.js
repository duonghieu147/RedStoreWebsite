import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

// import '../App';

class Item2 extends Component {
    // constructor(props) {
    //     super(props);
    // }

    render() {
        return (
            <div className="col-4">
                {/* <Link to={"/Product-details/" + this.props.title + "-" + this.props.iditem2 + ".html"}> */}
                <Link to={"/Product-details/" + this.props.iditem2}>

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
                </Link>
                {/* <Link to={"/Product-details/" + this.props.title + "-" + this.props.iditem2 + ".html"}>
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
                </Link> */}
            </div>
        );
    }
}

export default Item2;