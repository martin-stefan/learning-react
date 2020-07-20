import React from 'react';
import TodoItem from './TodoItem';

function Main() {
  return (
    <div>
      <main>
        <h1>To do App</h1>
        <div className="todoList">
          <TodoItem />
          <TodoItem />
          <TodoItem />
        </div>
      </main>
    </div>
  );
}

export default Main;