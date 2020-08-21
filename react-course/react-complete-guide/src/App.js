import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';
import classes from './App.module.css';


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

    const classes = [];

    if (this.state.person.length <= 2) {
      classes.push('red')
    }
    if (this.state.person.length <= 1) {
      classes.push('bold');
    }

    return (
  
      <div className="App">
        <h1>Yo</h1>
        <p className={classes.join(' ')}>this is a paragraph</p>
        <button className={classes.Button} alt={this.state.showPersons} onClick={this.togglePersonsHandler}>Toggle persons</button>
        {persons}
      </div>
    
    );

  }

}





export default App;