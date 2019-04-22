import React from "react";
import { Switch, Route } from 'react-router-dom';
import NavBar from "./NavBar";
import LeftColumn from "./LeftColumn";
import Feed from "./Feed";
import MainContainer from "./MainContainer";
import RouterTest from './RouterTest';

function App(){

  return (
    <div>
      <NavBar/>
      <Switch>
        <Route exact path='/' component={MainContainer} />
        <Route path='/routertest' component={RouterTest} />
      </Switch>
    </div>
  );
}

export default App;
