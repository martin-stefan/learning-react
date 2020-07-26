import React from 'react';
import '../App.css';
import Jokes from './Jokes';
import jokesData from '../jokeData';
import Form from './Form';

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

// class App extends React.Component {
//   constructor() {
//     super()
//     this.state = {
//       isLoggedIn: false
//     }
//     this.handleClick = this.handleClick.bind(this)
//   }

//   handleClick() {
//     this.setState(prevState => {
//       return {
//         isLoggedIn: !prevState.isLoggedIn
//       }
//     })
//   }

//   render() {
//     let buttonText = this.state.isLoggedIn ? "LOG OUT" : "LOG IN"
//     let loggedIn = this.state.isLoggedIn ? "LOGGED IN" : "LOGGED OUT"
//     return (
//       <div>
//         <button onClick={this.handleClick}>{buttonText}</button>
//         <h1>{loggedIn}</h1>
//       </div>
//     )
//   }
// }


// class App extends React.Component {
//   constructor() {
//     super()
//     this.state = {
//       isLoading: false, 
//       character: {}
//     }
//   }

//   componentDidMount() {
//     this.setState({isLoading: true})
//     fetch("https://swapi.dev/api/people/1")
//       .then(response => response.json())
//       .then(data => {
//         this.setState({
//           isLoading: false, 
//           character: data
//         })
//       })
//   }

//   render() {
//     const text = this.state.isLoading ? "loading..." : this.state.character.name
//     return (
//       <div>
//         <h1>{text}</h1>
//       </div>
//     )
//   }
// }

// class App extends React.Component {
//   constructor() {
//     super()
//     this.state = {
//       firstName: "",
//       lastName: "",
//       isFriendly: true,
//       gender: "",
//       favColor: "blue"
//     }

//     this.handleChange = this.handleChange.bind(this)
//   }

//   handleChange(event) {
//     const {name, value, type, checked} = event.target
//     event.target.type ==="checkbox" ? this.setState({[name]: checked}) :
//     this.setState({
//       [name]: value
//     })
//   }

//   render() {
//     return (
//       <form>
//         <input 
//           type="text"
//           value={this.state.firstName}
//           name="firstName" 
//           placeholder="First name"
//           onChange={this.handleChange}
//         />
//         <br />
//         <input
//           type="text"
//           value={this.state.lastName}
//           name="lastName"
//           placeholder="Last Name"
//           onChange={this.handleChange}
//         />

//         <h1>{this.state.firstName} {this.state.lastName}</h1>
       
//         <textarea 
//           value={"Some default value"} 
//           onChange={this.handleChange}
//         />
//         <br />

//         <label>
//           <input 
//             type="checkbox" 
//             name="isFriendly"
//             checked={this.state.isFriendly}
//             onChange={this.handleChange}
//           /> Are you friendly
//         </label>

//         <br />

//         <label>
//           <input 
//             type="radio" 
//             name="gender"
//             value="male"
//             checked={this.state.gender === "male"}
//             onChange={this.handleChange}
//           /> Male
//         </label>


//         <label>
//           <input 
//             type="radio" 
//             name="gender"
//             value="female"
//             checked={this.state.gender === "female"}
//             onChange={this.handleChange}
//           /> Female
//         </label>

//         <br />

//         <select 
//           value={this.state.favColor}
//           onChange={this.handleChange}
//           name="favColor">
          
//           <option value="blue">Blue</option>
//           <option value="red">Red</option>
//           <option value="green">Green</option>
//         </select>

//         <br />

//         <button>
//           Submit
//         </button>
//       </form>
//     )
//   }
// }


function App() {
  return (
    <Form />
  )
}


export default App