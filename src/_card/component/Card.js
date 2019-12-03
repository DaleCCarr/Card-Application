import React from 'react';
import '../style/Card.css';


function Card(props) {
  return (
    <div className="main-card">
      <style>{
        `:root {
             --main-color: ${props.cardInfo.colour||'red'};
             
              `}
             
            </style>
      <div className="inner-outline">
        <p className=" basic-text name">{props.cardInfo.title}</p>
        <img className="profile-pic" src={props.cardInfo.profile_picture} alt="profile picture for the user" />
      </div>
      <p className="description-text basic-text">{props.cardInfo.description}
      </p>

    </div>
  );
}

export default Card;
