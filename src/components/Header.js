import React from "react";
import styled from 'styled-components';
import {NavLink} from 'react-router-dom';

let Nav = styled.nav`
  display: flex;
  justify-content: center;

  a {
    margin: 0 10px;
  }
`;

export default function Header() {
  return (
    <header className="ui centered">
      <h1 className="ui center">Rick &amp; Morty Fan Page</h1>
      <Nav>
        <NavLink exact to="/">Home</NavLink>
        <NavLink to="/characters">Characters</NavLink>
      </Nav>
    </header>
  );
}
