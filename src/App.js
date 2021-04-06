import logo from './logo.svg';
import './App.css';
import Todo from './components/Todo';
import Button from './components/Button';
import { useState } from 'react'
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';
// Damir Kairzhanov 20MD0173

function App() {
  const [todos, setTodo] = useState([
    { id: 1, title: "Task 1", styleType: 0 },
    { id: 2, title: "Task 2", styleType: 0 },
    { id: 3, title: "Task 3", styleType: 1 },
  ]);
  const [showAddTodo, setShowAddTodo] = useState(false);

  function AddTodo(todo) {
    const id = Math.floor(Math.random() * 10000) + 1;
    const newTodo = {id, ...todo}
    setTodo([...todos, newTodo]);
    // console.log(todos);
  }

  function deleteTodo(id) {
    // console.log("delete", id);
    setTodo(todos.filter((todo) => todo.id !== id));
  }

  function changeStyle(id) {
    // console.log(id);
    setTodo(todos.map((todo) => todo.id === id ? { ...todo, styleType: 1 - todo.styleType } : todo));
  }
  
  return (
    <div className="container mt-4">
      <div className="row d-flex justify-content-center">
        <div className="col-6">
          <div className="card p-4">
            <div className="card-hearder d-flex flex-row justify-content-between">
              <h1 className="title">Todo App ({ (todos.length > 0) ? (todos.length + ' left') : 'nothing'})</h1>
              <Button onAdd={() => setShowAddTodo(!showAddTodo)} showAdd={showAddTodo}/>
            </div>
            <div className="card-body">
              {showAddTodo && <TodoForm onAdd={AddTodo} />}
              <br/>
              <br/>
              <TodoList todos={todos} onDelete={deleteTodo} onChangeStyle={changeStyle}/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
