import React, { Component } from 'react';
import './App.css';
import UserOutput from './UserOutput/UserOuput';
import UserInput from './UserInput/UserInput';

class App extends Component {

  state = {
    username: "phil"
  }

  userHandleChange = (event) => {
    this.setState = ({
      username: event.target.value
    });
  }

  render() {
    return (
      <div className="App">
        <UserInput 
          changed={this.userHandleChange} 
          currentName={this.state.username} 
        />
        <UserOutput username={this.state.username}/>
        <UserOutput username={this.state.username}/>
      </div>
    );
  }
}

export default App;
