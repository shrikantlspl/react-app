import React from 'react';
import video from "../Assets/Steel Shots Making Process Rotocast.mp4";

const Introvideo = () => {
  return (
    <div className='intro'>
      <video src={video} muted autoPlay loop controlsList='nodownload'></video>
      <div>
        <h1>Revolutionize Surface Preparation with Top-Tier Steel Shots</h1>
        <p>Discover Unrivaled Quality and Performance for Blasting Applications in Various Industries</p>
      </div>
    </div>

  );
}

export default Introvideo;
