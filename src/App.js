import React, { Component } from 'react';
import CountriesList from './components/CountriesList';
import Navbar from './components/Navbar';

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <CountriesList />
      </div>
    );
  }
}

export default App;
