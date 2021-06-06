import './App.css';
import dl from './data-items.json';
import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  // Switch,
  // Route,
  Link
} from "react-router-dom";
import Routers from './js/Routers';
// import Redstore from './js/Redstore';
// import Products from './js/Products';
// import Products_details from './js/Product_details';
// import Navigation from './js/Navigation';
// import Footer from './js/Footer';
// import Item1 from './js/Item1';
// import Login from './js/Login';
// import Login2 from './js/Login2';

class App extends Component {
  constructor(props) {
    super(props);
    
  }

  render() {
    return (
      <Router>
        <div>
          <Routers></Routers>
        </div>
      </Router>

    );
  }
}

export default App;