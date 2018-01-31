import React, { Component } from 'react';
import "./Cogs.css";

class Cogs extends Component {
    goToSettings = () => {
        window.location.href = this.props.link;
    }

  render() {
    return (
        <div className="Cogs">
            <i className="fa fa-cog" onClick={this.goToSettings}></i>
        </div>
    );
  }
}

export default Cogs;
