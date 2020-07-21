import React from 'react';

function TodoItem(props) {
  return (
    <div className="todoItem">
      <input type="checkbox" id="one" name="one"/>
      <label for="one">{props.text}</label>
      <br></br>
    </div>
  );
}

export default TodoItem;