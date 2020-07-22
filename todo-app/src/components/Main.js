import React from 'react';
import TodoItem from './TodoItem';
import todosData from '../todoData';

class Main extends React.Component {

  constructor() {
    super();
    this.state = {
      todoComp: todosData
    }
  }
  
  
  render() {
    const todoComp = this.state.todoComp.map(todo => <TodoItem key={todo.id} todo={todo} />);

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
}

export default Main;