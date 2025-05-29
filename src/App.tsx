import { useState } from 'react';
import ToDoList from './components/TodoList';
import AddTodo from './utils/addTodo';

function App() {
  const [todos, setTodos] = useState([
    { id: 1, task: 'First Task', completed: false },
    { id: 2, task: 'Second Task', completed: true },
  ]);
  const handleAddTodo = () => {
    AddTodo(todos, setTodos);
  };
  return (
    <>
      <ToDoList
        title="My Todo List"
        todos={todos}
        onAddTodo={handleAddTodo}
        onDeleteTodo={() => {}}
        onToggleTodo={() => {}}
      />
    </>
  );
}
export default App;
