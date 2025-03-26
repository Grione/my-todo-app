import { render, screen } from '@testing-library/react';
import { vi } from 'vitest';
import userEvent from '@testing-library/user-event';
import { TodoInput } from '../TodoInput';

describe('TodoInput', () => {
  it('добавляет задачу по Enter', async () => {
    const handleAdd = vi.fn();

    render(<TodoInput onAdd={handleAdd} />);

    const input = screen.getByPlaceholderText(/what needs to be done/i);
    await userEvent.type(input, 'Сделать тест{enter}');

    expect(handleAdd).toHaveBeenCalledTimes(1);
    expect(handleAdd).toHaveBeenCalledWith('Сделать тест');
  });

  it('не вызывает onAdd при пустом вводе', async () => {
    const handleAdd = vi.fn();

    render(<TodoInput onAdd={handleAdd} />);
    const input = screen.getByPlaceholderText(/what needs to be done/i);

    await userEvent.type(input, '   {enter}');

    expect(handleAdd).not.toHaveBeenCalled();
  });
});
