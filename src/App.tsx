import { v4 as uuidv4 } from 'uuid';
import { useState, useMemo } from "react";
import { Container, Typography, Paper } from '@mui/material';
import { TodoInput } from './components/TodoInput';
import { TodoList } from './components/TodoList';
import { TodoFooter } from './components/TodoFooter';

import { type Todo, type Filter } from './types/todo';


function App() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [filter, setFilter] = useState<Filter>('all');

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

  const filteredTodos = useMemo(() => {
    switch (filter) {
      case 'active':
        return todos.filter((t) => !t.isCompleted);
      case 'completed':
        return todos.filter((t) => t.isCompleted);
      default:
        return todos;
    }
  }, [filter, todos]);

  const clearCompleted = () => {
    setTodos((prev) => prev.filter((t) => !t.isCompleted));
  };

  return (
    <Container maxWidth="sm" sx={{ mt: 5 }}>
      <Typography variant="h2" align="center" sx={{ opacity: 0.1 }}>
        todos
      </Typography>
      <Paper sx={{ mt: 4, p: 2, boxShadow: 3 }}>
        <TodoInput onAdd={handleAdd} />
        <TodoList todos={filteredTodos} onToggle={handleToggle} />
        <TodoFooter
          activeCount={todos.filter((t) => !t.isCompleted).length}
          filter={filter}
          setFilter={setFilter}
          clearCompleted={clearCompleted}
        />
      </Paper>
    </Container>
  );
}

export default App;