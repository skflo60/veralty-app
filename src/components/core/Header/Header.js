import React, { Component } from 'react';
import "./Header.css";
import miniLogo from '../../../../public/miniLogo.png';
import Triangle from '../../../components/common/Triangle/Triangle';
import ActionBar from '../../../components/common/ActionBar/ActionBar';

class Header extends Component {

  render() {
    return (
        <div className="Header">
        	<div>
            	<img src={miniLogo} alt="header" className="logo" />
            </div>
            <ActionBar items={this.props.items} />
            <Triangle className="bottom" />
        </div>
    );
  }
}

export default Header;
