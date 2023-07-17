import styled from 'styled-components';

import { theme } from '@/styles/theme';

export const Wrapper = styled.header`
  padding: 1rem 0;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Nav = styled.nav`
  display: flex;
  gap: 1rem;
  margin-right: 2rem;

  & > a:hover {
    color: ${theme.colors.accent};
  }
  & > a {
    transition: color 400ms ease-in-out;
  }

  @media screen and (min-width: 768px) {
    gap: 2rem;
    margin-right: 4rem;
  }
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
`;
