import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as Redux from 'Redux';

const { combineReducers, createStore } = Redux;

//array composition
const todo = (state, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return {
        id: action.id,
        text: action.text,
        completed: false
      };
    case 'TOGGLE_TODO':
      if(state.id !== action.id) {
        return state;
      }

      return {
        ...state,
        completed: !state.completed
      }
    default:
      return state;
  }
}

const todos = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        todo(undefined, action)
      ];
    case 'TOGGLE_TODO':
      return state.map(t => {todo(t, action)})
    default:
      return state;
  }
}

/*const todoApp = combineReducers({
  todos
})*/

let nextTodoId = 0;
const { Component } = React;
class TodoApp extends Component {
  render() {
    return (
      <div>
        <input ref={ node => {
          this.input = node;
        }} />
        <button onClick={() => {
          store.dispatch({
            type: 'ADD_TODO',
            text: this.input.value,
            id: nextTodoId++
          });
          this.input.value = '';
        }} >
          Add Todo
        </button>
        <ul>
          {this.props.todos.map(todo => 
            <li key={todo.id}>
              {todo.text}
            </li>
          )}
        </ul>
      </div>
    );
  }
}

const store = createStore(todos);

const render = () => {
  ReactDOM.render(
    <TodoApp
      todos={store.getState()}
    />,
    document.getElementById('root')
  );
};

store.subscribe(render);
window.onload = () => {
  render();
}