import { useState } from 'react';
import { TextField } from '@mui/material';
import  styled  from '@emotion/styled';

type TodoInputProps = {
  onAdd: (text: string) => void;
};

const StyledInput = styled(TextField)`
  width: 100%;
  input {
    font-size: 1.5rem;
    padding: 12px;
  }
`;

export const TodoInput = ({ onAdd }: TodoInputProps) => {
  const [value, setValue] = useState('');

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && value.trim()) {
      onAdd(value.trim());
      setValue('');
    }
  };

  return (
    <StyledInput
      placeholder="What needs to be done?"
      value={value}
      onChange={(e) => setValue(e.target.value)}
      onKeyDown={handleKeyDown}
      variant="standard"
    />
  );
};