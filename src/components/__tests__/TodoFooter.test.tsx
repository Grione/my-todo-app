import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { TodoFooter } from '../TodoFooter';
import { Filter } from '../../types/todo';

describe('TodoFooter', () => {
  const setup = () => {
    const setFilter = vi.fn();
    const clearCompleted = vi.fn();

    render(
      <TodoFooter
        activeCount={3}
        filter="all"
        setFilter={setFilter}
        clearCompleted={clearCompleted}
      />
    );

    return { setFilter, clearCompleted };
  };

  it('отображает количество активных задач', () => {
    setup();
    expect(screen.getByText(/3 items left/i)).toBeInTheDocument();
  });

  it('меняет фильтр при клике по кнопкам', async () => {
    const { setFilter } = setup();

    await userEvent.click(screen.getByRole('button', { name: 'Active' }));
    expect(setFilter).toHaveBeenCalledWith('active');

    await userEvent.click(screen.getByRole('button', { name: 'Completed' }));
    expect(setFilter).toHaveBeenCalledWith('completed');
  });

  it('очищает выполненные задачи по кнопке', async () => {
    const { clearCompleted } = setup();

    await userEvent.click(screen.getByRole('button', { name: 'Clear completed' }));
    expect(clearCompleted).toHaveBeenCalledTimes(1);
  });
});
