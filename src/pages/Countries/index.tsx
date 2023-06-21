import * as C from './styles';
import { useEffect, useState } from 'react';

import { Input } from '../../components/Input';
import { CountriesTS } from '../../types/Countries';
import { CountryItem } from '../../components/CountryItem';
import { api } from '../../api';
export const Countries = () => {
  const [countries, setCountries] = useState<CountriesTS[]>([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    getAllCountries();
  }, []);

  const getAllCountries = async () => {
    setLoading(true);
    const countries = await api.getCountries();
    setCountries(countries);
    console.log(countries);
    setLoading(false);
  };

  return (
    <C.CountriesArea>
      <Input />
      <div className="countries">
        {loading && <div className="">Hang on...</div>}
        {!loading &&
          countries.map((item) => (
            <CountryItem
              name={item.name}
              population={item.population}
              region={item.region}
              capital={item.capital}
              flag={item.flags.png}
            />
          ))}
      </div>
    </C.CountriesArea>
  );
};
