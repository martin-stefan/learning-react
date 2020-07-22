import React from 'react';
import '../App.css';
import Jokes from './Jokes';
import jokesData from '../jokeData';

// function App() {
//   const jokeComp = jokesData.map(joke =>
//     <Jokes key={joke.id} question={joke.question} punchLine={joke.punchLine} />
//   );
//   return (
//     <div >
//       {jokeComp}
//     </div>
//   );
// }
// class App extends React.Component {
//   constructor() {
//     super();
//     this.state = {
//       name: "jeff",
//       age: "18"
//     };
    
//   }
//   render() {
//     return (
//       <div>
//         <h1>{this.state.name}</h1>
//         <h3> is {this.state.age} years old</h3>
//       </div>
//     );
//   }
// }

// class App extends React.Component {
//   constructor() {
//     super();
//     this.state = {
//       isLoggedIn: true
//     }
//   }

//   render() {
//     let wordDisplay;
//     if (this.state.isLoggedIn) {
//       wordDisplay = "in"
//     } else {
//       wordDisplay = "out"
//     }
//     return (
//       <div>
//         <h1>You are currently logged {wordDisplay}</h1>
//       </div>
//     );
//   }
// }

// class App extends React.Component {
//   render () {
//     return (
//       <div>
//         <Header />
//         <Greeting />
//       </div>
//     );
//   }
// }

// class Header extends React.Component {
//   render() {
//     return (
//       <header>
//         <p>Welcome, {this.props.username}</p>
//       </header>
//     );
//   }
// }

// class Greeting extends React.Component {
//   render() {
//     const date = new Date();
//     const hours = date.getHours();
//     let timeOfDay;
//     return (
//       <div>
//         <h1>hey</h1>
//       </div>
//     );
//   }
// }

export default App;