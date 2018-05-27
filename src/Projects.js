import React, { Component } from 'react';
import './App.css';

function Project(props){
  return (
    <div className="ProjectCard">
      <p>&#x2630; <a className="projectLink" href="#">{props.projectLink}</a> </p>
      <p><div className="type"></div> {props.projectType}</p>
    </div>
    )
}
class Projects extends Component {
  render() {
    return (
      <div className="Projects">
        <h4>{this.props.title}</h4>
        <h5>{this.props.message}</h5>
        <Project projectLink = {this.props.projectLinks[0]} projectType = {this.props.projectTypes[0]}/>
        <Project projectLink = {this.props.projectLinks[1]} projectType = {this.props.projectTypes[1]}/>
        <Project projectLink = {this.props.projectLinks[2]} projectType = {this.props.projectTypes[2]}/>
        <Project projectLink = {this.props.projectLinks[3]} projectType = {this.props.projectTypes[3]}/>
      </div>
    );
  }
}

export default Projects;
