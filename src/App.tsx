import { useState } from "react";
import { Container, Typography, Paper } from '@mui/material';
import { Todo } from './types/todo';

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);

  return (
    <Container maxWidth="sm" sx={{ mt: 5 }}>
      <Typography variant="h2" align="center" sx={{ opacity: 0.1 }}>
        todos
      </Typography>
      <Paper sx={{ mt: 4, p: 2, boxShadow: 3 }}>
        {/* Add TodoForm and TodoList components here */}
      </Paper>
    </Container>
  );
}

export default App;