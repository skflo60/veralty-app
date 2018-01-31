import React, { Component } from 'react';
import MiniLogo from '../../../components/core/Logo/MiniLogo';

class Affiliate extends Component {
  render() {
    return (
        <div className="Affiliate">
            <MiniLogo />
            <span className="affiliation-link">
                <b>Feel good ?</b> <a href="#">Télécharge-moi sur Amazon</a>
            </span>
        </div>
    );
  }
}

export default Affiliate;
