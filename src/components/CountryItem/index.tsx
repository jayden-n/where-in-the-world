import * as C from './styles';
import { CountryItemTS } from '../../types/CountryItem';
import { Link } from 'react-router-dom';
export const CountryItem = ({
  name,
  population,
  region,
  capital,
  flag,
}: CountryItemTS) => {
  return (
    <C.CountryItem>
      <Link to={`country/${name}`}>
        <div className="img--area">
          <img src={flag} alt={`country flag: ${name}`} />
        </div>

        <div className="data--area">
          <p className="country--name">{name}</p>
          <p>
            Population: <span>{population}</span>
            Region: <span>{region}</span>
            Capital: <span>{capital}</span>
          </p>
        </div>
      </Link>
    </C.CountryItem>
  );
};
