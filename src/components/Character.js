import React from 'react';
import styled, {keyframes} from "styled-components";


// Write your Character component here

const Character = props => {
    // Try to think through what state you'll need for this app before starting. Then build out
    // the state properties here.
  const {uuid, characterName, birthYear} = props;
    // Fetch characters from the API in an effect hook. Remember, anytime you have a 
    // side effect in a component, you want to think about which state and/or props it should
    // sync up with, if any.
    return (
      <div className="characterInfo">
        <p className="characterName">{characterName}</p>
        <p className="birthYear">{birthYear}</p>
      </div>
  );
  }
  
  export default Character;