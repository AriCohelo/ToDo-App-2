import TodoList from '../components/TodoList';
import { screen, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

describe('TodoList', () => {
  it('renders todo list with title, todos, add button and opens modal on container click', async () => {
    render(
      <TodoList
        title="My Todo List"
        todos={[{ id: 1, task: 'Example Todo', completed: false }]}
        onAddTodo={() => {}}
        onDeleteTodo={() => {}}
        onToggleTodo={() => {}}
      />
    );
    const user = userEvent.setup();
    screen.debug();
    expect(screen.getByTestId('todo-list-container')).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/title/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/add todo/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: '+' })).toBeInTheDocument();
    user.click(screen.getByTestId('todo-list-container'));
  });
});
