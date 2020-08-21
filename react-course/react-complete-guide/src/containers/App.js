import React, { Component } from 'react';
import Person from '../components/Persons/Person/Person';
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

    let btnClass = [classes.Button];

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

      
      btnClass.push(classes.Red)
      
    } 

    const assignedClasses = [];

    if (this.state.person.length <= 2) {
      assignedClasses.push(classes.red)
    }
    if (this.state.person.length <= 1) {
      assignedClasses.push(classes.bold);
    }

    return (
  
      <div className={classes.App}>
        <h1>Yo</h1>
        <p className={assignedClasses.join(' ')}>this is a paragraph</p>
        <button className={btnClass.join(' ')} alt={this.state.showPersons} onClick={this.togglePersonsHandler}>Toggle persons</button>
        {persons}
      </div>
    
    );

  }

}





export default App;