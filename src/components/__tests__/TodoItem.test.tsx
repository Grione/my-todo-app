import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { TodoItem } from '../TodoItem';
import { Todo } from '../../types/todo';

describe('TodoItem', () => {
  const sampleTodo: Todo = {
    id: '123',
    text: 'Выучить typescript',
    isCompleted: false,
  };

  it('отображает текст задачи', () => {
    render(<TodoItem todo={sampleTodo} onToggle={() => {}} />);

    expect(screen.getByText('Выучить typescript')).toBeInTheDocument();
  });

  it('чекбокс вызывает onToggle при клике', async () => {
    const handleToggle = vi.fn();

    render(<TodoItem todo={sampleTodo} onToggle={handleToggle} />);

    const checkbox = screen.getByRole('checkbox');
    await userEvent.click(checkbox);

    expect(handleToggle).toHaveBeenCalledTimes(1);
    expect(handleToggle).toHaveBeenCalledWith('123');
  });
});
