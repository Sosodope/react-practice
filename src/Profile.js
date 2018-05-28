import React, { Component } from 'react';
import girl from './girl.svg';
import location from './placeholder.svg';
import './App.css';

class Profile extends Component {
  constructor(props){
    super(props)
    this.state = {
      'bio' : 'hidden',
      'bioDescription': ''
    }
    this.addBio = this.addBio.bind(this)
    this.cancelEdit = this.cancelEdit.bind(this)
    this.writeBio = this.writeBio.bind(this)
    this.saveBio = this.saveBio.bind(this)
  }
  addBio(){
    this.setState({bio: 'shown'})
  }
  cancelEdit(){
    this.setState({bio: 'hidden'})
  }
  writeBio = e =>{
    this.setState({bioDescription: e.target.value})
  }
  saveBio = e =>{
    let description = this.state.bioDescription.slice()
    description = this.state.bioDescription
    this.setState({bioDescription: description, bio: 'hidden'})
  }
  render() {
    return (
      <div className="Profile">
        <header className="Profile-top">
          <img src={girl} className="Profile-pic" alt="profile picture" />
          <h1 className="fullName">Jane Smith</h1>
          <h4 className="userName">jsmith2018</h4>
          <p className="Profile-bio">
            <p>{this.state.bioDescription}</p>
            <div className="Add-bio" bio={this.state.bio} style = {{display: this.state.bio === 'shown'? 'grid': 'none'}}>
              <textarea onChange={this.writeBio}></textarea>
              <button className="Save-btn" onClick={this.saveBio}>Save</button>
              <button className="Cancel-btn" onClick={this.cancelEdit}>Cancel</button>
            </div>
            <button onClick={this.addBio} style = {{display: this.state.bio === 'shown'? 'none': 'grid'}}>Add a bio</button>
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
