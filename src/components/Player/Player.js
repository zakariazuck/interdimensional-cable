import React, { Component } from 'react'
import shaka from 'shaka-player'

class Player extends Component {

  player = null;

  componentDidMount() {
    shaka.polyfill.installAll();
    if (shaka.Player.isBrowserSupported()) {
      this.initPlayer();
    } else {
      console.error('Browser not supported!');
    }
  }

  initPlayer() {
    
    this.player = new shaka.Player(this.refs.video);
    this.player.load('http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4')
    this.player.addEventListener('error', this.onErrorEvent);
  }

  render() {
    return (
      <div>
        <video ref="video"
          width="466"
          controls autoPlay>
        </video>
      </div>
    );
  }
}

export default Player;
