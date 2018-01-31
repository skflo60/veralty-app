import React, { Component } from 'react';
import Affiliate from '../components/core/Affiliate/Affiliate';
import Triangle from '../components/common/Triangle/Triangle';
import FBHelper from './../helper/FBHelper';
import Entertainer from './../helper/Entertainer';
import YoutubePlayer from 'react-youtube-player';
import Sun from '../../public/sun.png';

class Enjoy extends Component {

	constructor(props) {
		const fb = new FBHelper();

		super(props);
      this.videoId = null;
      this.playbackState = "paused";
		  fb.get("me", { fields: "id, name, likes" }).then(result => {
		  	console.log(result);
		  	this.entertainer = new Entertainer(result.likes);
        this.entertainer.getRandomMusic().then(result=>{
          console.log(result.id.videoId);
          this.videoId = result.id.videoId;
          this.playbackState = "paused";
          this.setState({ videoId: result.id.videoId, playbackState: this.playbackState });
          setTimeout(()=>{
            this.playbackState = "playing";
            this.setState({ videoId: result.id.videoId, playbackState: this.playbackState });
          }, 2000);
        })
		  });

	}

  render() {
    if(this.videoId === null) {
      return (
          <div className="Enjoy">
            <img src={Sun} alt="Sun" className="Sun" />
          </div>
        );
    } else {
      return (
        <div className="Enjoy">
            <YoutubePlayer
                videoId={this.videoId}
                playbackState={this.playbackState}
                configuration={
                    {
                        showinfo: 0,
                        controls: 0,
                        autoplay: 1
                    }
                }
            />
            <Triangle />
            <Affiliate />
        </div>
      );
    }
  }
}

export default Enjoy;
