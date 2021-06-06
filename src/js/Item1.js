import React, { Component } from 'react';

class Item1 extends Component {
    // constructor(props) {
    //     super(props);
    // }
    
    render() {
        return (
            <div className="col-3">
                <a href="/Product-details"><img src={this.props.imgcategory} alt="description"/></a>
            </div>
        );
    }
}

export default Item1;