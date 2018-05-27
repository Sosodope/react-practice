import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Profile from './Profile';
import Projects from './Projects';
import Tabs from './Tabs';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Profile />
        <Tabs tabLinks={['Overview', 'Repositories', 'Stars', 'Followers', 'Following']}/>
        <Projects title = 'Pinned repositories' message='Customize your pinned repositories' projectLinks={['Project 1', 'Project 2', 'Project 3', 'Project 4']} projectTypes={['Javascript', 'Javascript', 'Javascript', 'Javascript']}/>
      </div>
    );
  }
}

export default App;
