import './App.css';
import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  // Switch,
  // Route,
  Link
} from "react-router-dom";
import Routers from './js/Routers';
import Footer from './js/Footer';
import Product_Details from './js/Product_Details';
import About from './js/About';
import Navigation from './js/Navigation';


class App extends Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <Router>
        <div>
          {/* <Navigation></Navigation>
          <About></About>
          <Contact></Contact>
          <Footer></Footer> */}
          {/* <Product_Details></Product_Details> */}
          <Routers></Routers>
        </div>
      </Router>

    );
  }
}

export default App;