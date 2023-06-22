import * as C from './styles';

import { RxMoon, RxSun } from 'react-icons/rx';
import { useForm } from '../../contexts/ThemeContext';
import { themeActions } from '../../contexts/ThemeContext';
import { GiWorld } from 'react-icons/gi';
import { useState } from 'react';

export const Header = () => {
  const { state, dispatch } = useForm();
  const [darkMode, setDarkMode] = useState(false);

  const handleChangeTheme = () => {
    dispatch({
      type: themeActions.setTheme,
      payload: state.theme === 'light' ? 'dark' : 'light',
    });
    setDarkMode(!darkMode);
  };

  return (
    <C.Header theme={state.theme}>
      <div className="container">
        <h1>
          Where in the World?{' '}
          <GiWorld style={{ marginBottom: '-4px', marginLeft: '2px' }} />
        </h1>

        {darkMode ? (
          <div className="toggle--dark" onClick={handleChangeTheme}>
            <RxMoon size={25} />
          </div>
        ) : (
          <div className="toggle--light" onClick={handleChangeTheme}>
            <RxSun size={20} />
          </div>
        )}
      </div>
    </C.Header>
  );
};
