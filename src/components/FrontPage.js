import React, {useState} from 'react';
import Header from './Header';
import WelcomePage from './WelcomePage';
import CharacterList from './CharacterList';

export default function FrontPage() {
  return (
    <div className="front-page">
      <Header />
      <WelcomePage />
      <CharacterList />
    </div>
  )
}