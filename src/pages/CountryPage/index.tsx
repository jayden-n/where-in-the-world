import { useEffect, useState } from 'react';
import * as C from './styles';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { CountryTS } from '../../types/Country';
import { api } from '../../api';
import { SingleCountry } from '../../components/SingleCountry';

export const CountryPage = () => {
  const { name } = useParams();
  const [loading, setLoading] = useState(false);
  const [country, setCountry] = useState<CountryTS[]>([]);

  useEffect(() => {
    if (name) {
      getCountry(name);
    }
  }, [name]);

  const getCountry = async (param: string) => {
    setLoading(true);
    const country = await api.getCountry(param);
    setCountry(country);
    console.log(country);
    setLoading(false);
  };
  return (
    <C.CountryPage>
      <div className="container">
        <Link to="/" className="back--button">
          Go back
        </Link>
        {loading && <div className="loading">Hang on...</div>}
        {!loading &&
          country.map((item) => (
            <SingleCountry
              flag={item.flags.png}
              name={item.name}
              nativeName={item.nativeName}
              population={item.population}
              region={item.region}
              subregion={item.subregion}
              capital={item.capital}
              topLevelDomain={item.topLevelDomain[0]}
              currencie={item.currencies && item.currencies}
              languages={item.languages}
              borders={item.borders}
            />
          ))}
      </div>
    </C.CountryPage>
  );
};
