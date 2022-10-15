import PropTypes from 'prop-types';
import { Container } from './styles';

export default function Footer({ repos, followers, following }) {
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

Footer.propTypes = {
  repos: PropTypes.any.isRequired,
  followers: PropTypes.any.isRequired,
  following: PropTypes.any.isRequired,
};
