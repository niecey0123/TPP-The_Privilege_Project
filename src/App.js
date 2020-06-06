import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Home  from "./Components/Home"
import NavBar from './Components/NavBar';
import Scenerios from './Components/Scenerios';
import StopAndFrisk from './Components/StopAndFrisk';

function App() {
  return (
    <Router>
    <div>
      <NavBar />

      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/N_Scene_01">
          <Scenerios />
        </Route>
        <Route path="/N_scenerio/2/">
          <StopAndFrisk />
        </Route>
      </Switch>
    </div>
  </Router>
  );
}

export default App;
