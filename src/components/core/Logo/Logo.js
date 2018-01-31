import React, { Component } from 'react';
import logo from '../../../../public/logo.png';

class Logo extends Component {
  render() {
    return (
    <div className="Logo">
      	<img src={logo} alt="logo"></img>
    </div>
    );
  }
}

export default Logo;
