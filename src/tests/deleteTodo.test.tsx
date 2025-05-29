import deleteTodo from '../utils/deleteTodo';
import type { Todo } from '../types';

describe('deleteTodo', () => {
  it('removes the todo with the specified id', () => {
    const initialTodos: Todo[] = [
      { id: 1, task: 'Task 1', completed: false },
      { id: 2, task: 'Task 2', completed: true },
      { id: 3, task: 'Task 3', completed: false },
    ];

    const updatedTodos = deleteTodo(initialTodos, 2);

    expect(updatedTodos).toEqual([
      { id: 1, task: 'Task 1', completed: false },
      { id: 3, task: 'Task 3', completed: false },
    ]);
  });
});
