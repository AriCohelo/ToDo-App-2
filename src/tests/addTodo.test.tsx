import { describe, it, expect, vi } from 'vitest';
import AddTodo from '../utils/addTodo';
import type { Todo } from '../types';

describe('addTodo', () => {
  it('should add a new todo with task "New Task"', () => {
    const initialTodos: Todo[] = [
      { id: 1, task: 'Old Task', completed: false },
    ];

    const setTodos = vi.fn();
    AddTodo(initialTodos, setTodos);

    expect(setTodos).toHaveBeenCalledWith(
      expect.arrayContaining([
        expect.objectContaining({ task: 'New Task', completed: false }),
      ])
    );
  });
});
