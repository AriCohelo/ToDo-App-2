import type { Todo } from '../types';
export default function toggleTodo(todos: Todo[], idToToggle: number) {
  return todos.map((todo) =>
    todo.id === idToToggle ? { ...todo, completed: !todo.completed } : todo
  );
}
