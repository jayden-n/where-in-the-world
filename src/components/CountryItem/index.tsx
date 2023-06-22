import * as C from './styles';
import { CountryItemTS } from '../../types/CountryItem';
import { Link } from 'react-router-dom';
import { useForm } from '../../contexts/ThemeContext';

export const CountryItem = ({
  name,
  population,
  region,
  capital,
  flag,
}: CountryItemTS) => {
  const { state } = useForm();

  return (
    <C.CountryItem theme={state.theme}>
      <Link to={`/country/${name}`}>
        <div className="img--area">
          <img src={flag} alt={`flag name: ${name}`} />
        </div>
        <div className="data--area">
          <p className="country--name">{name}</p>
          <p>
            Population: <span>{population.toLocaleString()}</span>
          </p>
          <p>
            Region: <span>{region}</span>
          </p>
          <p>
            Capital: <span>{capital}</span>
          </p>
        </div>
      </Link>
    </C.CountryItem>
  );
};
