import React from 'react';

function TodoItem(props) {
  return (
    <div className="todoItem">
      <input 
        type="checkbox" 
        checked={props.todo.completed} 
        name={props.todo.id} 
        onChange={() => console.log("changed")}
      />
      <label for={props.todo.id}>{props.todo.text}</label>
      <br></br>
    </div>
  );
}

export default TodoItem;