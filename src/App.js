import React, { Component } from 'react';
import Navbar from './Navbar';
import './App.css';

import dummy from './dummy';
import Preview from './Preview';

class App extends Component {
  handleChange = (subject) => {
    alert(subject)
    console.log(subject)
  }



  render() {
    return (
      <div className="App">
        <Navbar handleChange={this.handleChange} projects={dummy.projects}/>
        <Preview project={dummy.projects[0]} />
      </div>
    );
  }
}

export default App;
