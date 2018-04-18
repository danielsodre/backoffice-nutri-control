import React, { Component } from 'react';
import './header.css';

class Header extends Component {
  render() {
    return (
        <header {...this.props}>
          <h1 className="App-title">Nutri Control 2</h1>
        </header>
    );
  }
}

export default Header;
