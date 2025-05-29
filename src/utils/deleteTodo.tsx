import type { Todo } from '../types';

export default function deleteTodo(todos: Todo[], idToDelete: number): Todo[] {
  return todos.filter((todo) => todo.id !== idToDelete);
}
