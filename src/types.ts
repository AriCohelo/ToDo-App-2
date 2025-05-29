export interface Todo {
  id: number;
  task: string;
  completed: boolean;
}

export interface TodoListProps {
  title: string;
  todos: Todo[];
  onAddTodo: () => void;
  onDeleteTodo: (id: number) => void;
  onToggleTodo: (id: number) => void;
}
