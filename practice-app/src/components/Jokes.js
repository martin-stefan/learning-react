import React from 'react';

function Jokes(props) {
  return (
    <div>
      <h1>
        {props.question}
      </h1>
      <h2>
        {props.punchLine}
      </h2>
    </div>
  )
}

export default Jokes;
