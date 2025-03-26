import { useState } from "react";
import { Container, Typography, Paper } from '@mui/material';
import { Todo } from './types/todo';
import { TodoInput } from './components/TodoInput';
import { v4 as uuidv4 } from 'uuid';

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

  return (
    <Container maxWidth="sm" sx={{ mt: 5 }}>
      <Typography variant="h2" align="center" sx={{ opacity: 0.1 }}>
        todos
      </Typography>
      <Paper sx={{ mt: 4, p: 2, boxShadow: 3 }}>
        <TodoInput onAdd={handleAdd} />
      </Paper>
    </Container>
  );
}

export default App;