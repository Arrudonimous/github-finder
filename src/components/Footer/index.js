import { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { Container } from './styles';
import { UserContext } from '../../contexts/UserContext';

export default function Footer() {
  const [followers, setFollowers] = useState();
  const [following, setFollowing] = useState();
  const [repos, setRepos] = useState();
  const context = useContext(UserContext);
  const followersUrl = `https://api.github.com/users/${context.username}/followers`;
  const followingUrl = `https://api.github.com/users/${context.username}/following`;
  const reposUrl = `https://api.github.com/users/${context.username}/repos`;

  useEffect(() => {
    (async () => {
      const { data: followersData } = await axios.get(followersUrl);
      const { data: followingData } = await axios.get(followingUrl);
      const { data: reposData } = await axios.get(reposUrl);
      setFollowers(followersData);
      setFollowing(followingData);
      setRepos(reposData);
    })();
  }, [context.username]);

  if (followers || following) {
    return (
      <Container>
        <ul>
          <li className="title">Repos</li>
          <li>{repos.length}</li>
        </ul>
        <ul>
          <li className="title">Followers</li>
          <li>{followers.length}</li>
        </ul>
        <ul>
          <li className="title">Following</li>
          <li>{following.length}</li>
        </ul>
      </Container>
    );
  }
}
