import { useContext, useState } from 'react';
import { FiSun, FiMoon } from 'react-icons/fi';
import { Container, SearchContainer, TitleContainer } from './styles';
import { ThemeContext } from '../../contexts/ThemeContext';
import { UserContext } from '../../contexts/UserContext';

export default function Header() {
  const { handleToggleTheme, theme } = useContext(ThemeContext);
  const { setUsername } = useContext(UserContext);
  const [text, setText] = useState('');

  function handleSetUsername() {
    setUsername(text);
    setText('');
  }

  return (
    <Container>
      <TitleContainer>
        <h1>Buscador Github</h1>
        <button type="submit" onClick={handleToggleTheme}>
          <span>{theme.name === 'dark' ? 'Light' : 'Dark'}</span>
          {theme.name === 'dark' ? <FiSun size={24} color={theme.colors.title} /> : <FiMoon size={24} color={theme.colors.title} />}
        </button>
      </TitleContainer>
      <SearchContainer>
        <input
          type="text"
          placeholder="Digite o github username..."
          value={text}
          onChange={(e) => {
            setText(e.target.value);
          }}
        />
        <button type="submit" onClick={handleSetUsername}>Buscar</button>
      </SearchContainer>
    </Container>
  );
}
