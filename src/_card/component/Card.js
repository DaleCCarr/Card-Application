import React from 'react';
import '../style/Card.css';
import defaultPic from '../resources/jigglypuff.png'

function Card() {
  return (
    <div className="main-card">
      <div className="inner-outline">
        <p className="name">Dale Carr</p>
        <img className= "profile-pic" src={defaultPic} alt = "profile picture for the user"/>
        </div>
    </div>
  );
}

export default Card;
