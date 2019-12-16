import React from "react";
import { Route } from 'react-router-dom';
import FrontPage from "./components/FrontPage";

export default function App() {
  return (
    <div className="App">
      <Route exact path="/" component={FrontPage}/>
    </div>
  );
}
