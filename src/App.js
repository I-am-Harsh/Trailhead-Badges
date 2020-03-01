import React from 'react';
import './App.css';
import MainComponent from '../src/Components/MainComponent';
import LeaderboardComponent from './Components/LeaderboardComponent';
import { BrowserRouter,Switch, Route} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
        <Switch>
          <Route exact path ='/' component = {MainComponent}/>
          <Route exact path ='/leaderboard' component = {LeaderboardComponent}/>
        </Switch>
    </BrowserRouter>
  );
}

export default App;