import React, { Component } from 'react';

class FBButton extends Component {
	checkConnection = () => {
		window.location.href = "#/welcome";
	}

  render() {
    return (
    <button className="FBButton" onClick={this.checkConnection}>
    	Se connecter via Facebook
    </button>
    );
  }
}

export default FBButton;
