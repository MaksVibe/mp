'use client';
import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  max-width: 324px;
  padding: 0 12px;
  margin: 0 auto;

  @media screen and (min-width: 768px) {
    max-width: 656px;
    padding: 0;
  }

  @media screen and (min-width: 1040px) {
    max-width: 888px;
  }

  @media screen and (min-width: 1280px) {
    max-width: 1094px;
  }

  @media screen and (min-width: 1440px) {
    max-width: 1230px;
  }
`;
