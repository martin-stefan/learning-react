import React, { Component } from 'react';
import Persons from '../components/Persons/Persons';
import classes from './App.module.css';
import Cockpit from '../components/Cockpit/Cockpit';
import WithClass from '../hoc/WithClass';


class App extends Component {

  constructor(props) { //old syntax for what we already have
    super(props); //just calling state sets this automatically
    this.state = {
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
        },
        {
          id: 'slkdfsfdj',
          name: 'john',
          age: 27
        }
      ],
      showPersons: false

    }
    
  }

  // static getDerivedStateFromProps(props, state) {
  //   return state;
  // }

  componentDidMount() {
    console.log('component mounted');
  }

  shouldComponentUpdate() {
    return true;
  }

  componentDidUpdate() {
    console.log('component updated')
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
          clicked={this.deletePersonHandler}
          changed={this.nameChangedHandler} />;
    }

  
    return (
      <WithClass classes={classes.App}>
        <Cockpit 
          title={this.props.title}
          showPersons={this.state.showPersons} 
          personsLength={this.state.person.length}
          clicked={this.togglePersonsHandler} />
        {persons}
      </WithClass>
    );

  }

}





export default App;