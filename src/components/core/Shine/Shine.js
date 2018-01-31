import React, { Component } from 'react';

import Cloud from '../../../../public/cloud.png';
import Sun from '../../../../public/sun.png';


class Shine extends Component {
    getMyGift = () => {
        window.location.href = "#/enjoy";
    }
  render() {
    return (
    <div className="Shine" onClick={this.getMyGift}>
        <img src={Sun} alt="Sun" className="Sun" />
        <img src={Cloud} alt="Cloud" className="Cloud" />
    </div>
    );
  }
}

export default Shine;
