import React, { Component } from 'react';
import "./ActionBar.css";

class ActionBar extends Component {

  goToLink = (link) => {
      window.location.href = link;
  }

  handleClick(item) {
      if (item.link) {
        this.goToLink(item.link);
      } else {
        // Check if there is a function to execute on click
        if (item.callback && typeof item.callback === "function") {
          item.callback();
        }
      }
  }

  render() {
    const items = this.props.items || [];
    const listItems = items.map(item => {
      return (
        <span key={item.key}>
          <i className={item.class} aria-hidden="true" onClick={() => {this.handleClick(item)}}></i>
        </span>
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
