import { Button, ButtonGroup, Typography, Box } from '@mui/material';
import { type Filter } from '../types/todo';

type TodoFooterProps = {
  activeCount: number;
  filter: Filter;
  setFilter: (filter: Filter) => void;
  clearCompleted: () => void;
};

export const TodoFooter = ({
  activeCount,
  filter,
  setFilter,
  clearCompleted,
}: TodoFooterProps) => {
  return (
    <Box
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      mt={2}
      flexWrap="wrap"
      gap={2}
    >
      <Typography variant="body2">{activeCount} items left</Typography>

      <ButtonGroup size="small" variant="outlined">
        <Button onClick={() => setFilter('all')} variant={filter === 'all' ? 'contained' : 'outlined'}>
          All
        </Button>
        <Button onClick={() => setFilter('active')} variant={filter === 'active' ? 'contained' : 'outlined'}>
          Active
        </Button>
        <Button onClick={() => setFilter('completed')} variant={filter === 'completed' ? 'contained' : 'outlined'}>
          Completed
        </Button>
      </ButtonGroup>

      <Button color="error" onClick={clearCompleted}>
        Clear completed
      </Button>
    </Box>
  );
};
