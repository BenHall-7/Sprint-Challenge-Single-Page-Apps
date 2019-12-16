import React from "react";
import { Route } from 'react-router-dom';
import WelcomePage from './components/WelcomePage';

export default function App() {
  return (
    <div className="App">
      <Route exact path="/" component={WelcomePage}/>
    </div>
  );
}
