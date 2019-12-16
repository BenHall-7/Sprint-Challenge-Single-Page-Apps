import React from "react";
import styled from 'styled-components';

let Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: left;
  padding: 10px;

  img {
    width: 200px;
    height: 200px;
    margin-right: 40px;
    object-fit: cover;
  }
`;

export default function CharacterCard({character}) {
  return (
    <Wrapper>
      <img src={character.image} alt={character.name}/>
      <div>
        <h2>{character.name}</h2>
        {character.type && <p>Type: {character.type}</p>}
        <p>Status: {character.status}</p>
        <p>Species: {character.species}</p>
        <p>Gender: {character.gender}</p>
      </div>
    </Wrapper>
  )
}
