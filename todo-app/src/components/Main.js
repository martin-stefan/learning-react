import React from 'react';
import TodoItem from './TodoItem';
import todosData from '../todoData';

class Main extends React.Component {

  constructor() {
    super();
    this.state = {
      todoComp: todosData
    }
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(id) {
    this.setState(prevState => {
      const updated = prevState.todoComp.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo
      })
      return {
        todos: updated
      }
    })
  }
  
  
  render() {
    const todoComp = this.state.todoComp.map(item => 
    <TodoItem 
    key={item.id} 
    item={item} 
    handleChange = {this.handleChange}
    />);

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