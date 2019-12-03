import React from 'react';
import '../style/Card.css';


export default function Card({ cardInfo: { colour = 'red',
 title = 'Item not loaded', 
 description = 'This item was not loaded correctly' ,
  profile_picture  =  ""}}) {

  return (
    <div className="main-card" style={{ '--main-color': colour }}>
      <div className="inner-outline">
        <p className=" basic-text name">{title}</p>
        <img className="profile-pic" src={profile_picture} alt="profile picture for the user" />
      </div>
      <p className="description-text basic-text">{description}
      </p>

    </div>
  );
}

