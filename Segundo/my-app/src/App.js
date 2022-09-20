/*import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
*/

import { useState } from 'react';
import './App.css';
import Form from './components/Form';
import TodoItem from './components/TodoItem';

function App() {
  const[todos, setTodos]= useState([
    {
      title: 'Read diskworld'
    },
  ])
  const addTodo = (todo) => {
    setTodos([...todos, todo]);
  };

  return (
    <div className="App">
      <Form addTodo={addTodo} />
      {todos.map((todo) => (
        <TodoItem todo={todo}/>
      ))}
      {!todos.length && <p>No todos</p>}
    </div>
  );
}

export default App;