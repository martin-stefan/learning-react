import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person';

const App = props => {

  const [personState, setPersonState] = useState({
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
  });

  const [otherState, setOtherState] = useState('some other value');

  const switchNameHandler = () => {
    // this.state.person[0].name = 'john' dont do this
    setPersonState({
      person: [
        { name: 'jack', age: 21}
      ]
    });
  };

  return (
    <div className="App">
      <h1>Yo</h1>
      <button onClick={switchNameHandler}>Switch Name</button>
      <Person 
        name={personState.person[0].name} 
        age={personState.person[0].age}
        click={switchNameHandler}
      >
      </Person>
    </div>
  );

}

export default App;



