import React, { Component } from 'react';
import classes from './Person.module.css';

import Aux from '../../../hoc/Auxiliary';

class Person extends Component {
  render() {
    return ( //using aux allows use to not have to use a container div
    <Aux> 
        <div className={classes.Person}>
          <p onClick={this.props.click}>my name is {this.props.name} and I am {this.props.age} years old</p>
          <input type="text" onChange={this.props.changed} value={this.props.name} />
        </div>
      </Aux>
    );
  }
};

export default Person;