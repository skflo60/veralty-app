import React, { Component } from 'react';

import logo from './../../logo.svg';
import Menu from '../Menu/Menu';

import "./Shell.css";

class Shell extends Component {
  render() {
    return (
      <div className="Shell">
           <div className="Shell-header">
          <img src={logo} className="Shell-logo" alt="logo" />
          <h2>Remote</h2>
          <Menu />
        </div>
      </div>
    );
  }
}

export default Shell;
