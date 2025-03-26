import { v4 as uuidv4 } from 'uuid';
import { useState } from "react";
import { Container, Typography, Paper } from '@mui/material';
import { TodoInput } from './components/TodoInput';
import { TodoList } from './components/TodoList';

import { type Todo } from './types/todo';


function App() {
  const [todos, setTodos] = useState<Todo[]>([]);

  const handleAdd = (text: string) => {
    const newTodo: Todo = {
      id: uuidv4(),
      text,
      isCompleted: false,
    };
    setTodos([...todos, newTodo]);
  };

  const handleToggle = (id: string) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo
      )
    );
  };

  return (
    <Container maxWidth="sm" sx={{ mt: 5 }}>
      <Typography variant="h2" align="center" sx={{ opacity: 0.1 }}>
        todos
      </Typography>
      <Paper sx={{ mt: 4, p: 2, boxShadow: 3 }}>
        <TodoInput onAdd={handleAdd} />
        <TodoList todos={todos} onToggle={handleToggle} />
      </Paper>
    </Container>
  );
}

export default App;