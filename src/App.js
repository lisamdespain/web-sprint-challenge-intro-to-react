import React, { useState, useEffect } from 'react';
import Character from './components/Character';
import axios from 'axios';
import * as uuid from "uuid";
import styled from "styled-components";
// import { data } from "./mocks/handlers"



const ContainerDiv = styled.div`
width:60%;
margin:1rem auto;
border:1px solid #00100B;
border-radius:10px;
padding:2%;
background-color: rgba(48, 39, 24,.25);
`

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  const [characters, setCharacters] = useState([]);
 
  useEffect(() =>{
    axios.get(`https://swapi.dev/api/people/`)
    .then(res =>{
      setCharacters(res.data);
     
    })
    .catch(err => console.log(err))
  }, [])
  
    return (
      <div className="App">
        <h1 className="Header">Star Wars Characters</h1>
        <ContainerDiv>
        {
          characters.map(char =>{
            return <Character key={uuid.v4()} characterName={char.name} birthYear={char.birth_year} />
          })
        }
      
         </ContainerDiv>         
        
      </div>
    );
  }
  
  export default App;