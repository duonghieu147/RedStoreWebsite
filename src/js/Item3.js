import React, { Component } from 'react';

class Item3 extends Component {
    render() {
        return (
            <div className="offer">
                <div className="small-container">
                    <div className="row">
                        <col-2>
                            <img src="./images/exclusive.png" className="offer-img"alt="description" />
                        </col-2>
                        <div className="col-2">
                            <p>Exclusive Available On RedStore</p>
                            <h1>Smart Band 4</h1>
                            <small>
                                MagSafe is a new ecosystem of accessories for easy attachment and faster wireless charging. With
            endless combinations, there is a mix to match any style. </small>
                            <a href className="btn">Buy Now →</a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Item3;