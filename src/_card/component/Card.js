import React from 'react';
import '../style/Card.css';
import defaultPic from '../resources/jigglypuff.png'

function Card() {
  return (
    <div className="main-card">
      <div className="inner-outline">
        <p className=" basic-text name">Dale Carr</p>
        <img className= "profile-pic" src={defaultPic} alt = "profile picture for the user"/>
        </div>
        <p className= "description-text basic-text">Tackle matey ballast rum nipperkin doubloon cutlass fore hempen halter lanyard. Mutiny gally rutters run a shot across the bow Sail ho cutlass reef sails driver salmagundi sutler. Rope's end case shot poop deck topgallant Gold Road grog reef pinnace rum jury mast.
        Tackle matey ballast rum nipperkin doubloon cutlass fore hempen halter lanyard. Mutiny gally rutters run a shot across the bow Sail ho cutlass reef sails driver salmagundi sutler. Rope's end case shot poop deck topgallant Gold Road grog reef pinnace rum jury mast.
        Tackle matey ballast rum nipperkin doubloon cutlass fore hempen halter lanyard. Mutiny gally rutters run a shot across the bow Sail ho cutlass reef sails driver salmagundi sutler. Rope's end case shot poop deck topgallant Gold Road grog reef pinnace rum jury mast.
        </p>

    </div>
  );
}

export default Card;
