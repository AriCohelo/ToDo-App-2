import type { Todo } from '../types';

export default function addTodo(
  todos: Todo[],
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>
) {
  const newTodo = {
    id: Date.now(),
    task: 'New Task',
    completed: false,
  };
  setTodos([...todos, newTodo]);
}
