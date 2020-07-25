import React from 'react';

function TodoItem(props) {
  let classDone = props.item.completed ? "todoItem completed" : "todoItem incomplete"
  return (
    <div className={classDone}>
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