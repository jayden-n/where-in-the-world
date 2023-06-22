import * as C from './styles';
import { InputTS } from '../../types/InputTS';
import { useForm } from '../../contexts/ThemeContext';
import { useState } from 'react';
import useDebounce from './useDebounce';
const delay = 150;

export const Input = ({ search }: InputTS) => {
  const { state } = useForm();

  const [input, setInput] = useState('');

  const debouncedChange = useDebounce(search, delay);

  const handleChange = (e: string) => {
    debouncedChange(e);
    setInput(e);
  };

  return (
    <C.InputArea theme={state.theme}>
      <input
        type="text"
        placeholder="Search for a country..."
        value={input}
        onChange={(e) => handleChange(e.target.value)}
      />

      <select
        value="Filter by Region"
        onChange={(e) => handleChange(e.target.value)}
      >
        <option disabled selected>
          Filter by Region
        </option>
        <option value="Africa">Africa</option>
        <option value="Americas">Americas</option>
        <option value="Asia">Asia</option>
        <option value="Europe">Europe</option>
        <option value="Oceania">Oceania</option>
      </select>
    </C.InputArea>
  );
};
