import React, { Component } from 'react';
import "./MultiSelectBox.css";

class MultiSelectBox extends Component {

  toggleSelection(item) {
    item.active = !item.active;
    this.setState({
      items: this.props.values
    });
  }

  render() {
    const values = this.props.values || [];
    const listItems = values.map(item => {
      return (
        <div key={item.key} className={item.active ? 'active' : ''} onClick={() => this.toggleSelection(item)}>
          {item.label}
        </div>
      );
    });
    return (
      <div className="MultiSelectBox">
         {listItems}
      </div>
    );
  }
}

export default MultiSelectBox;
