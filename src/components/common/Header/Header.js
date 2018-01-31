import React, { Component } from 'react';
import "./Header.css";
import miniLogo from '../../../../public/miniLogo.png';
import Triangle from '../../../components/common/Triangle/Triangle';

class Header extends Component {
constructor(props) {
    super(props);
}

  render() {
    return (
        <div className="Header">
        	<div>
            	<img src={miniLogo} alt="header" className="logo" />
                <ActionBar items={this.props.menu} />
            </div>
            <Triangle className="bottom" />
        </div>
    );
  }
}

export default Header;
