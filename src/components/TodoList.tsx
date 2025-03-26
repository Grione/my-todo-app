import { List } from '@mui/material';
import { TodoItem } from './TodoItem';

import { type Todo } from '../types/todo';

type TodoListProps = {
  todos: Todo[];
  onToggle: (id: string) => void;
};

export const TodoList = ({ todos, onToggle }: TodoListProps) => {
  return (
    <List>
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} onToggle={onToggle} />
      ))}
    </List>
  );
};