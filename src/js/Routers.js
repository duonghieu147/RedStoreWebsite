import React, { Component } from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Products from './Products';
import Product_Details from './Product_Details';
import Redstore from './Redstore';
import Login from './Login';
import Login2 from './Login2';
import About from './About';
class Routers extends Component {
  render() {
    return (
      <div>
        {/* <Router> */}
        <Route exact path="/"><Redstore /></Route>
        <Route exact path="/Products"><Products /></Route>
        {/* <Route exact path="/Product-details/:title-:iditem2.html"><Product_Details /></Route> */}
        <Route exact path="/Product-details/:iditem2"><Product_Details /></Route>

        <Route exact path="/About"><About/></Route>
        {/* <Route path="/Contact"><Contact/></Route> */}
        <Route exact path="/Account"><Login2 /></Route>
        <Route exact path="/Login"><Login2 /></Route>
        {/* </Router> */}
      </div>
    );
  }
}

export default Routers;