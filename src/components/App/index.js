import { useEffect, useMemo, useState } from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from '../../assets/styles/global';
import themes from '../../assets/styles/themes';
import { ThemeComponent } from '../../contexts/ThemeContext';
import { UserProvider } from '../../contexts/UserContext';
import Home from '../../pages/Home';

function App() {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');
  const currentTheme = useMemo(() => themes[theme] || themes.light, [theme]);
  useEffect(() => {
    localStorage.setItem('theme', theme);
  });

  return (
    <UserProvider>
      <ThemeComponent theme={currentTheme} setTheme={setTheme}>
        <ThemeProvider theme={currentTheme}>
          <GlobalStyles />
          <Home />
        </ThemeProvider>
      </ThemeComponent>
    </UserProvider>
  );
}

export default App;
