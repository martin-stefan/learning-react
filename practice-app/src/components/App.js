import React from 'react';
import '../App.css';
import Jokes from './Jokes';

function App() {
  return (
    <div >
      <Jokes 
        question="Is frank funny"
        punchLine="no"
      />
    </div>
  );
}

export default App;
