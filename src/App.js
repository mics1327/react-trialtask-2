import React from 'react';
import './App.css';
import Mainpage from './Components/Mainpage';
import Home from './Components/home';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

function App() 
{
  {
    return(
      <div>
        <Router>
          <Switch>
            <Route exact path="/main"><Mainpage /></Route>
            <Route exact path="/"><Home /></Route>
            </Switch>
        </Router>
      </div>
    )
  }
}

export default App; 
