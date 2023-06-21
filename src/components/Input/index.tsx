import * as C from './styles';
import { InputTS } from '../../types/InputTS';

export const Input = ({ value, setSearch }: InputTS) => {
  return (
    <C.InputArea>
      <input
        type="text"
        placeholder="Search for a country..."
        value={value}
        onChange={(e) => setSearch(e.target.value)}
      />
      <select>
        <option value="Filter by region" disabled selected>
          Filter by region
        </option>
      </select>
    </C.InputArea>
  );
};
