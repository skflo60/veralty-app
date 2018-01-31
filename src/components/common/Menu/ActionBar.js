import React, { Component } from 'react';
import { Link } from 'react-router'
import Header from '../components/common/Header/Header';

class ActionBar extends Component {
  render() {
    const listItems = this.props.items.map((item) => {
      return (
        <li key={item.name}>
          <a href={item.link}>{item.name}</a>
        </li>
      );
    });
    return (
      <div className="ActionBar">
         {listItems}
      </div>
    );
  }
}

export default ActionBar;
