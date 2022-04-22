import React from 'react';
import styled, {keyframes} from "styled-components";

const keyf = keyframes`
// from {
//     transform: translateX(10%);
   
//   }

//   to {
//     transform: translateX(0%);
   
//   }
`
const StyledCharacter = styled.div`
display:flex;
justify-content:space-between;
margin:1rem auto;
border:1px solid #00100B;
border-radius:10px;
padding:2%;
background-color: ${pr => pr.theme.backgroundColor};
h3{
  color: ${pr => pr.theme.red};
  
}
transition: all .2s ease-in-out;
  &:hover{
    background-color: ${pr => pr.theme.secondaryColor};
    transition: all 0.2s ease-in-out;
  }

div.characterName{
    text-align:left;
    display:flex;
    align-items:center;
    font-size:2rem;
}
.birthYear{
    font-weight:bold;
    padding:1%;
    color: ${pr => pr.theme.white}; 
    background-color: ${pr => pr.theme.brown};
    font-family: Bangers, cursive;
    font-size:1.5rem;
}
animation: ${keyf} 1s;
`

// Write your Character component here

const Character = props => {
    // Try to think through what state you'll need for this app before starting. Then build out
    // the state properties here.
  const {uuid, characterName, birthYear} = props;
    // Fetch characters from the API in an effect hook. Remember, anytime you have a 
    // side effect in a component, you want to think about which state and/or props it should
    // sync up with, if any.
    return (
      <StyledCharacter>
        <div className="characterName">{characterName}</div>
        <button className="birthYear">{birthYear}</button>
      </StyledCharacter>
  );
  }
  
  export default Character;