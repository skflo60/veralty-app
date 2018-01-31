import React, { Component } from 'react';
import Logo from './components/core/Logo/Logo';

class Home extends Component {
  render() {
    const text = "Veralty, VR arcade rooms";
    return (
      <div className="Home">
      	<Logo />
      	<div className="Home-message">
          { text }
      	</div>
      </div>
    );
  }
}

export default Home;
