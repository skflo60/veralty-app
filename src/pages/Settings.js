import React, { Component } from 'react';
import { Link } from 'react-router'
import Header from '../components/core/Header/Header';

class Settings extends Component {
  render() {
    return (
      <div className="Settings">
            <Header items={[]} />
            <div className="content">
              <div>
              	<Link to='/clock'>Réveil</Link>
              	<Link to='/disconnect'>Déconnexion</Link>
              </div>
            </div>
      </div>
    );
  }
}

export default Settings;
