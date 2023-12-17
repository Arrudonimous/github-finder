import { useContext } from 'react';
import Content from '../../components/Content';
import Header from '../../components/Header';
import { Container1, Container2 } from './styles';
import { UserContext } from '../../contexts/UserContext';

export default function Home() {
  const { username } = useContext(UserContext);
  if (username) {
    return (
      <Container1>
        <Header />
        <Content />
      </Container1>
    );
  }

  return (
    <Container2>
      <Header />
    </Container2>
  );
}
