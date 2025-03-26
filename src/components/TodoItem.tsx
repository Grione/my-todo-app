import styled from '@emotion/styled';
import { Checkbox, ListItem, ListItemText } from '@mui/material';

import { type Todo } from '../types/todo';

type TodoItemProps = {
  todo: Todo;
  onToggle: (id: string) => void;
};

const StyledText = styled(ListItemText)<{ completed: boolean }>`
  span {
    font-size: 1.2rem;
    text-decoration: ${({ completed }) => (completed ? 'line-through' : 'none')};
    opacity: ${({ completed }) => (completed ? 0.5 : 1)};
  }
`;

export const TodoItem = ({ todo, onToggle }:TodoItemProps) => { 
  return (
    <ListItem divider disablePadding>
      <Checkbox
        checked={todo.isCompleted}
        onChange={() => onToggle(todo.id)}
        sx={{ ml: 1 }}
      />
      <StyledText
        primary={todo.text}
        completed={todo.isCompleted}
        sx={{ ml: 1 }}
      />
    </ListItem>
  );
}