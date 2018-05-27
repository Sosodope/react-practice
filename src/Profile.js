import React, { Component } from 'react';
import girl from './girl.svg';
import location from './placeholder.svg';
import './App.css';

class Profile extends Component {
  render() {
    return (
      <div className="Profile">
        <header className="Profile-top">
          <img src={girl} className="Profile-pic" alt="profile picture" />
          <h1 className="fullName">Jane Smith</h1>
          <h4 className="userName">jsmith2018</h4>
          <p className="Profile-bio">
            <button>Add a bio</button>
          </p>
          <p className="Profile-info location">
            <img src={location} /> Planet Earth
          </p>
        </header>
      </div>
    );
  }
}

export default Profile;
