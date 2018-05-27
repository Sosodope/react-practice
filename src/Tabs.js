import React, { Component } from 'react';
import './App.css';

function TabLink(props){
  return <a className="navLinks" href="#">{props.tabLink}</a>
}
class Tabs extends Component {
  render() {
    return (
      <div className="Tabs">
        <TabLink tabLink = {this.props.tabLinks[0]}/>
        <TabLink tabLink = {this.props.tabLinks[1]}/>
        <TabLink tabLink = {this.props.tabLinks[2]}/>
        <TabLink tabLink = {this.props.tabLinks[3]}/>
        <TabLink tabLink = {this.props.tabLinks[4]}/>
      </div>
    );
  }
}

export default Tabs;
