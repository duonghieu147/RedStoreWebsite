import React, { Component } from 'react';
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link
// } from "react-router-dom";
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


class Routers extends Component {
  render() {
    return (
      <div>
        {/* <Router> */}
          <Route exact path="/"><Redstore /></Route>
          <Route path="/Products"><Products /></Route>
          <Route path="/Product-details/:id"><Product_Details /></Route>
          <Route path="/Account"><Login2/></Route>
          <Route path="/Login"><Login2/></Route>
        {/* </Router> */}
      </div>
    );
  }
}

export default Routers;