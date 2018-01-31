import React, { Component } from 'react';
import miniLogo from '../../../../public/miniLogo.png';

class MiniLogo extends Component {
  render() {
    return (
    <div className="MiniLogo">
      	<img src={miniLogo} alt="miniLogo"></img>
    </div>
    );
  }
}

export default MiniLogo;
