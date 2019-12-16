import React from "react";
import { Route } from 'react-router-dom';
import Header from './components/Header';
import WelcomePage from "./components/WelcomePage";
import CharacterList from "./components/CharacterList";

export default function App() {
  return (
    <div className="App">
      <Header />
      <Route exact path="/" component={WelcomePage}/>
      <Route path="/characters" component={CharacterList}/>
    </div>
  );
}
