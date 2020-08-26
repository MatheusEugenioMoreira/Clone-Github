import styled from 'styled-components';

import { FaGithub } from 'react-icons/fa';

export const Container = styled.div`
  display: flex;
  align-items: center;

  padding: 11px 16px;

  background: var(--header);
`;

export const GithubLogo = styled(FaGithub)`
  width: 32px;
  height: 32px;

  flex-shrink: 0;

  fill: var(--logo);

  cursor: pointer;
  &:hover {
    opacity: 0.8;
  }
`;

export const SearchForm = styled.form`
  width: 100%;

  padding-left: 16px;

  input {
    width: 100%;

    background: var(--search);
    outline: 0;

    border-radius: 6px;

    padding: 7px 12px;

    &:focus {
      width: 318px;
    }

    transition: width 0.2s ease-out, color 0.2s ease-out;
  }
`;
