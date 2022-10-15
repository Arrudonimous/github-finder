import axios from 'axios';
import { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../contexts/UserContext';
import { Container, ContentContainer, Info } from './styles';
import Footer from '../Footer';

export default function Content() {
  const [info, setInfo] = useState();
  const context = useContext(UserContext);
  const url = `https://api.github.com/users/${context.username}`;

  useEffect(() => {
    (async () => {
      const { data } = await axios.get(url);
      setInfo(data);
    })();
  }, [context.username]);

  if (info) {
    return (
      <Container>
        <ContentContainer>
          <img src={info.avatar_url} alt="foto" />
          <Info>
            <h1>{info.name}</h1>
            <small>{info.login}</small>
            <span>{info.bio || 'Não há biografia :('}</span>
          </Info>
        </ContentContainer>
        <Footer />
      </Container>
    );
  }
}
