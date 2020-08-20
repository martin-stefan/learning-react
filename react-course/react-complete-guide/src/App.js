import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {

  state = {
    person: [
      {
        id: 'slkhgf',
        name: 'Max',
        age: 23
      },
      {
        id: 'slkdfj',
        name: 'manu',
        age: 34
      }
    ],
    showPersons: false
  }


  nameChangedHandler = (event, id) => {

    const personIndex = this.state.person.findIndex(p => {
      return p.id === id;
    });


    const person = {
      ...this.state.person[personIndex]
    };

    person.name = event.target.value;

    const persons = [...this.state.person];
    persons[personIndex] = person;


    this.setState({
      person: persons
    })
  }


  togglePersonsHandler = () => {
    this.setState({
      showPersons: !this.state.showPersons
    })
  }

  deletePersonHandler = (index) => {
    const persons = [...this.state.person];
    persons.splice(index, 1);
    this.setState({person: persons});
  }


  
  render() {


    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.person.map((person, index) => {
            return <Person 
              click={() => this.deletePersonHandler(index)}
              name={person.name} 
              age={person.age} 
              key={person.id}
              changed={(event) =>this.nameChangedHandler(event, person.id)}
              />
          })}
        </div>
      );
    } 

    return (
      <div className="App">
        <h1>Yo</h1>
        <button onClick={this.togglePersonsHandler}>Toggle persons</button>
        {persons}
      </div>
    );

  }

}

export default App;



