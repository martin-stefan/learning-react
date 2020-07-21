import React from 'react';
import '../App.css';
import Jokes from './Jokes';
import jokesData from '../jokeData';

function App() {
  const jokeComp = jokesData.map(joke =>
    <Jokes key={joke.id} question={joke.question} punchLine={joke.punchLine} />
  );
  return (
    <div >
      {jokeComp}
    </div>
  );
}

export default App;
