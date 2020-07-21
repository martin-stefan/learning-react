import React from 'react';

function Jokes(props) {
  return (
    <div>
      <h1>
        {props.question}
      </h1>
      <h2 style={{color: !props.question && "red"}}>
        {props.punchLine}
      </h2>
    </div>
  )
}

export default Jokes;
