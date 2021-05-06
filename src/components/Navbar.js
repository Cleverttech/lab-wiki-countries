import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Navbar extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-primary bg-primary text-white">
          <span className="navbar-brand mb-0 h1">WikiCountries</span>
        </nav>
      </div>
    );
  }
}
export default Navbar;
