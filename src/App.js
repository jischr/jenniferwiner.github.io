import React, { Component } from 'react';
import './App.css';

import Name from './components/Name';
import Nav from './components/Nav';
import Slants from './components/Slants';

import Footer from './sections/Footer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="Side">
          <Name/>
          <Nav onNavClick={ id => console.log('clicked ' + id) }/>
        </div>
        <div className="Center">
          <Slants/>
        </div>
        <div className="div">
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
