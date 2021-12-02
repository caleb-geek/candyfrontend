import React,{useState,useEffect} from 'react';
import './App.css';
import {BrowserRouter, Switch, Route, Redirect} from 'react-router-dom';
import Navbar from './components/Navbar';
import Register from './components/Register';
import Login from './components/Login';
import Home from './components/Home';
import {PrivateRoute} from "./utils/PrivateRoute"
import Rules from './components/Rules';
import Dashboard from './components/Dashboard';
import Game from './components/Game';
import CreateGame from './components/Game/CreateGame';
import StartGame from './components/Game/StartGame';
import ViewAllGames from './components/Game/ViewAllGames';
import NewScores from './components/Game/NewScores';

function App() {


  return (
    <div className="App">
      <BrowserRouter>
     
      <Navbar/>
      <Switch>
        <Route exact path="/"component={Home}/>
        <Route exact path="/register" component={Register} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/rules" component={Rules} />
        <Route exact path="/admin" component={Dashboard} />
        <Route exact path="/game" component={Game} />
        <Route exact path="/creategame" component={CreateGame} />
        <Route exact path="/startgame/:id" component={StartGame} />
        <Route exact path="/viewallgames" component={ViewAllGames}/>
        <Route exact path="/newscores" component={NewScores}/>
        
      
        
        
        

        <Rules/>
        
        </Switch>
      
      </BrowserRouter>
     
      
    </div>
  );
}

export default App;
