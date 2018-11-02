import React, { Component } from 'react';
import { Route, Switch } from 'react-router'

import './App.css';

import GameChat from './pages/GameChat'
const Lobby = () => null

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>rpgchat-ui</h1>
        {/*
        <Switch>
          <Route path="/lobby" component={Lobby} />
          <Route path="/game/:gameId" component={GameChat} />
        </Switch>
        */}
      </div>
    );
  }
}

export default App;
