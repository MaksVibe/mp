import styled from 'styled-components';

import { theme } from '../../../styles/theme';

export const Wrapper = styled.div`
  position: fixed;
  width: 100%;
  min-height: 100vh;
  z-index: 10;
  background-color: white;
  top: 0;
  right: 0;
`;

export const Nav = styled.nav`
  display: flex;
  flex-direction: column;
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
  min-height: 100vh;
  display: flex;
  justify-content: space-between;
  align-items: start;
  padding: 60px 60px 20px;
`;
