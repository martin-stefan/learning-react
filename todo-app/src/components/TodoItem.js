import React from 'react';

function TodoItem() {
  return (
    <div className="todoItem">
      <input type="checkbox" id="one" name="one"/>
      <label for="one">This is the first thing to do</label>
      <br></br>
    </div>
  );
}

export default TodoItem;