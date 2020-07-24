import React from 'react';

function TodoItem(props) {
  return (
    <div className="todoItem">
      <input 
        type="checkbox" 
        checked={props.item.completed} 
        name={props.item.id} 
        onChange={() => props.handleChange(props.item.id)}
      />
      <label for={props.item.id}>{props.item.text}</label>
      <br></br>
    </div>
  );
}

export default TodoItem;