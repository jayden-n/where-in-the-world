import * as C from './styles';

export const Input = () => {
  return (
    <C.InputArea>
      <input type="text" placeholder="Search countries..." />
      <select>
        <option value="Filter by region" disabled selected>
          Filter by region
        </option>
      </select>
    </C.InputArea>
  );
};
