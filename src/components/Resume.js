import React, { Component } from 'react';
import resume from './resume1.jpg';

class Resume extends Component {
  render() {
    return (
      <div clasName="main">
        <img
          src={resume}
          className="resume"
          alt="image2"
          width="750"
          height="900"
          style={{
            alignSelf: 'center',
            resizeMode:'cover',
            flex: 1,
            position: 'absolute'
          }}
        />
      </div>
    );
  }
}

export default Resume;
