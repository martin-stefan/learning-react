import React, { useEffect } from 'react';
import classes from './Cockpit.module.css';

const Cockpit = (props) => {

  useEffect(() => {
    console.log('cockpit use effect');
  }, []);

  const assignedClasses = [];

  let btnClass = [classes.Button];

  if (props.showPersons) {
    btnClass.push(classes.Red)
  }

  if (props.personsLength <= 2) {
    assignedClasses.push(classes.red)
  }
  if (props.personsLength <= 1) {
    assignedClasses.push(classes.bold);
  }

  return (
    <div className={classes.Cockpit}>
      <h1>{props.title}</h1>
      <p className={assignedClasses.join(' ')}>this is a paragraph</p>
      <button 
        className={btnClass.join(' ')} 
        alt={props.showPersons} 
        onClick={props.clicked}>
        
        Toggle persons
      </button>
    </div>
  );
};


export default React.memo(Cockpit);