import React from 'react';

function TodoItem(props) {
  return (
    <div className="todoItem">
      <input type="checkbox" checked={props.todo.completed}/>
      <label for="one">{props.todo.text}</label>
      <br></br>
    </div>
  );
}

export default TodoItem;