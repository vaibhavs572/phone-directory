import React, { Component } from 'react';
import Header from './Header.js';
import './App.css';


class App extends Component {
  render() {
    return (
      <div>
	        <Header />
        <button>Add</button>	        <div className="component-body-container">
        <div>	          <button className="custom-btn add-btn">Add</button>
          <span>Name</span><br />	
          <span>Phone</span>	          <div className="grid-container heading-container">
            <span className="grid-item name-heading">Name</span>
            <span className="grid-item phone-heading">Phone</span>
          </div>
        </div>
      </div>
    );
  }
}

export default App;