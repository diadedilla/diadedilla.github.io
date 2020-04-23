import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import About from './Components/About';
import Recipes from './Components/Recipes';
import Navigation from './Components/Navigation';
import Footer from './Components/Footer';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      active: 'home'
    }
  }

  render() {
    return (
      <Router basename={process.env.PUBLIC_URL}>
        <div>
          <Navigation />
          <Route exact path="/" component={ About } />
          <Route path={process.env.PUBLIC_URL + "/recipes"} component={ Recipes } />
        </div>
        <Footer />
      </Router>
    )
  }
}

export default App;
