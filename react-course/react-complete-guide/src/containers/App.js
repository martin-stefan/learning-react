import React, { Component } from 'react';
import Persons from '../components/Persons/Persons';
import classes from './App.module.css';
import Cockpit from '../components/Cockpit/Cockpit';


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
      persons = 
        <Persons 
          persons={this.state.person}
          clicked={this.togglePersonsHandler}
          changed={this.nameChangedHandler} />;
 
      
    } 

  
    return (
  
      <div className={classes.App}>
        <Cockpit 
          title={this.props.title}
          showPersons={this.state.showPersons} 
          persons={this.state.person}
          clicked={this.togglePersonsHandler} />
        {persons}
      </div>
    
    );

  }

}





export default App;