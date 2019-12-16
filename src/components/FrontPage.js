import React, {useState} from 'react';
import Header from './Header';
import WelcomePage from './WelcomePage';

export default function FrontPage() {
  return (
    <div className="front-page">
      <Header />
      <WelcomePage />
    </div>
  )
}