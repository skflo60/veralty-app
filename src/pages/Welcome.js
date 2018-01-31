import React, { Component } from 'react';
import MiniLogo from '../components/core/Logo/MiniLogo';
import Cogs from '../components/common/Cogs/Cogs';
import ProfilePic from '../components/core/ProfilePic/ProfilePic';
import Shine from '../components/core/Shine/Shine';
import HelloFb from '../components/core/Hello/Hello';
import FBHelper from './../helper/FBHelper';

class Welcome extends Component {

  constructor(props) {
    super(props);
    const fb = new FBHelper();
    const token = fb.getToken();
    const userID = token.userID;
    fb.get(userID + "/picture", { height: 160, redirect: false }).then(result => {
      this.name = token.name;
      this.pic = result.data.url;
      this.setState({name: this.name, pic: this.pic});
    });
  }

  render() {
    return (
      <div className="Welcome">
      		 <MiniLogo />
           <Cogs link="#/settings" />
           <ProfilePic pic={this.pic} />
           <HelloFb name={this.name} />
           <Shine />
      </div>
    );
  }
}

export default Welcome;
