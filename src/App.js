import React, { Component } from 'react';
import Header from './Header.js';
import './App.css';


class App extends Component {
   constructor() {

    super();
    let subscribers = [	    this.state = {
      {	      subscribersListToShow: []
        id: 1,	    }
        name: "Shilpa Bhat",	  }
		
		
  render() {


    return (
      <div>
	  <Header heading="Phone Directory" />
        <button>Add</button>	        <div className="component-body-container">
        <div>	          <button className="custom-btn add-btn">Add</button>
          <span>Name</span><br />	
          <span>Phone</span>	          <div className="grid-container heading-container">
            <span className="grid-item name-heading">Name</span>
            <span className="grid-item phone-heading">Phone</span>
          </div>
		  
          {
			this.state.subscribersListToShow.map(sub => {
              return <div key={sub.id} className="grid-container">
                <span className="grid-item">{sub.name}</span>
                <span className="grid-item">{sub.phone}</span>
				 <span className="grid-item action-btn-container">
                  <button className="custom-btn delete-btn">Delete</button>
                </span>
              </div>
            })
          }
        </div>
      </div>
    );
  }
}

export default App;