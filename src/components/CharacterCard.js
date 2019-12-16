import React from "react";
import styled from 'styled-components';

let Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: left;

  img {
    width: 200px;
    height: 200px;
    object-fit: cover;
  }
`;

export default function CharacterCard({character}) {
  console.log(character);

  return (
    <Wrapper>
      <img src={character.image} alt={character.name}/>
      <div>
        <h2>{character.name}</h2>
        {character.type && <p>Type: {character.type}</p>}
        <p>Status: {character.status}</p>
        <p>Species: {character.species}</p>
      </div>
    </Wrapper>
  )
}
