import toggleTodo from '../utils/toggleTodo';
import type { Todo } from '../types';

describe('toggleTodo', () => {
  it('toggles todo status completed/non completed', () => {
    const todos: Todo[] = [
      { id: 1, task: 'Task 1', completed: false },
      { id: 2, task: 'Task 2', completed: true },
      { id: 3, task: 'Task 3', completed: false },
    ];
    const updatedTodos = toggleTodo(todos, 1);
    expect(updatedTodos).toEqual(
      todos.map((todo) =>
        todo.id === 1 ? { ...todo, completed: !todo.completed } : todo
      )
    );
  });
});
