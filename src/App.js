import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Profile from './Profile';
import Tabs from './Tabs';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Profile />
        <Tabs tabLinks={['Overview', 'Repositories', 'Stars', 'Followers', 'Following']}/>
      </div>
    );
  }
}

export default App;
