import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {

  state = {
    person: [
      {
        name: 'Max',
        age: 23
      },
      {
        name: 'manu',
        age: 34
      }
    ]
  }

  render() {
    return (
      <div className="App">
        <h1>Yo</h1>
        <Person />
      </div>
    );
  }
}

export default App;