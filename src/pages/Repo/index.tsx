import React from 'react';

import { Link } from 'react-router-dom';

import {
  Container,
  Breadcrumb,
  RepoIcon,
  Stats,
  StarIcon,
  ForkIcon,
  LinkButton,
  GitHubIcon,
} from './styles';

const Repo: React.FC = () => {
  return (
    <Container>
      <Breadcrumb>
        <RepoIcon />
        <Link className={'username'} to={'/MatheusEugenioMoreira1'}>
        Matheus-Eugenio-Moreira1
        </Link>

        <span>/</span>

        <Link className={'repoName'} to={'/MatheusEugenioMoreira1/Clone-Github'}>
        Clone Github
        </Link>
      </Breadcrumb>

      <p>UI Clone</p>

      <Stats>
        <li>
          <StarIcon />
          <b>7777</b>
          <span>stars</span>
        </li>
        <li>
          <ForkIcon />
          <b>777</b>
          <span>forks</span>
        </li>
      </Stats>

      <LinkButton href={'https://github.com/MatheusEugenioMoreira1/Clone-Github'}>
        <GitHubIcon />
        <span>View on GitHub</span>
      </LinkButton>
    </Container>
  );
};

export default Repo;
