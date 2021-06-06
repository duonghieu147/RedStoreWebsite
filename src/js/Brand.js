import React, { Component } from 'react';

class Brand extends Component {
    render() {
        return (
            <div className="brands">
                <div className="small-container">
                    <div className="row">
                        <div className="col-5">
                            <img src="./images/logo-godrej.png" alt="description"/>
                        </div>
                        <div className="col-5">
                            <img src="./images/logo-oppo.png" alt="description"/>
                        </div>
                        <div className="col-5">
                            <img src="./images/logo-coca-cola.png" alt="description"/>
                        </div>
                        <div className="col-5">
                            <img src="./images/logo-paypal.png" alt="description"/>
                        </div>
                        <div className="col-5">
                            <img src="./images/logo-philips.png" alt="description"/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Brand;