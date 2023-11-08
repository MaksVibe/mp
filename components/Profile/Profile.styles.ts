'use client';
import styled from 'styled-components';

import { colors } from '../../styles/theme';

export const Wrapper = styled.div`
  display: flex;
  gap: 20px;
  margin: 20px 0 100px;
  font-size: 0.85rem;
  & p {
    flex: 2;
  }
  & a {
    color: ${colors.btnBorder};
  }

  @media screen and (max-width: 767px) {
    flex-direction: column;
  }
  @media screen and (min-width: 1040px) {
    font-size: 1rem;
  }
`;

export const Heading = styled.h2`
  position: relative;
  flex: 1;
  &::after {
    position: absolute;
    content: '_';
    top: 0;
    animation: blink 1.2s steps(2, start) infinite;
    -webkit-animation: blink 1.2s steps(2, start) infinite;
  }
`;
