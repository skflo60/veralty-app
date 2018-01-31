import React, { Component } from 'react';
import './Slider.css';
import Omg from "./OMG";

class Slider extends Component {
  render() {
    return (
    	<div>
	      <input id="temperature" type="range" min="10" max="30" />
	      <Omg />

	          <Omg />

	              <Omg />

	                  <Omg />
      </div>
    );
  }
}

export default Slider;
