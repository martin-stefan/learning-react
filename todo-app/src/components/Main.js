import React from 'react';
import TodoItem from './TodoItem';
import todosData from '../todoData';

function Main() {

  const todoComp = todosData.map(todo => <TodoItem 
    key={todo.id} 
    text={todo.text} 
    completed={todo.completed} />
  );


  return (
    <div>
      <main>
        <h1>To do App</h1>
        <div className="todoList">
          {todoComp}
        </div>
      </main>
    </div>
  );
}

export default Main;