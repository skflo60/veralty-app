import React, { Component } from 'react';
import Header from '../components/core/Header/Header';

class Clock extends Component {
  render() {
    return (
      <div className="Clock">
            <Header items={[{key: "add", class: "fa fa-plus", callback: {}}]}/>
            <div>

            </div>
      </div>
    );
  }
}

export default Clock;
