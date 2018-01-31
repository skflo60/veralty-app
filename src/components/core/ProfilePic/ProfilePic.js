import React, { Component } from 'react';

class ProfilePic extends Component {

  render() {
  	console.log(this.props);
    return (
    <div className="ProfilePic">
      	<img src={this.props.pic} alt="defaultPic"></img>
    </div>
    );
  }
}

export default ProfilePic;
