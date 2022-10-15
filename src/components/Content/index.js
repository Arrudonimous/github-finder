import axios from 'axios';
import { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../contexts/UserContext';
import { Container, ContentContainer, Info } from './styles';
import Footer from '../Footer';

export default function Content() {
  const [info, setInfo] = useState();
  const [followers, setFollowers] = useState();
  const [following, setFollowing] = useState();
  const [repos, setRepos] = useState();
  const context = useContext(UserContext);
  const url = `https://api.github.com/users/${context.username}`;
  const followersUrl = `https://api.github.com/users/${context.username}/followers`;
  const followingUrl = `https://api.github.com/users/${context.username}/following`;
  const reposUrl = `https://api.github.com/users/${context.username}/repos`;

  useEffect(() => {
    (async () => {
      const { data } = await axios.get(url);
      const { data: followersData } = await axios.get(followersUrl);
      const { data: followingData } = await axios.get(followingUrl);
      const { data: reposData } = await axios.get(reposUrl);
      setFollowers(followersData);
      setFollowing(followingData);
      setRepos(reposData);
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
        <Footer repos={repos} followers={followers} following={following} />
      </Container>
    );
  }
}
