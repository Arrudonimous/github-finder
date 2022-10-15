import {
  createContext, useMemo,
} from 'react';
import PropTypes from 'prop-types';

export const ThemeContext = createContext('dark');

export function ThemeComponent({ children, setTheme, theme }) {
  function handleToggleTheme() {
    setTheme((prevState) => (prevState === 'light' ? 'dark' : 'light'));
  }

  const value = useMemo(() => ({
    theme, handleToggleTheme,
  }), [theme]);

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
}

ThemeComponent.propTypes = {
  children: PropTypes.node.isRequired,
  setTheme: PropTypes.func.isRequired,
  theme: PropTypes.objectOf.isRequired,
};
