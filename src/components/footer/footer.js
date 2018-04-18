import React, { Component } from 'react';
import './footer.css';

class Footer extends Component {
  render() {
    return (
        <footer {...this.props}>
          <h1 className="App-title">Footer</h1>
        </footer>
    );
  }
}

export default Footer;
