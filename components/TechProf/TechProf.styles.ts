'use client';
import styled from 'styled-components';

export const Main = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  max-width: 1440px;
  margin: 0 auto;

  padding-left: 15px;

  font-size: 20px;
  color: white;
  background-color: #131313;

  @media screen and (min-width: 768px) {
    padding-left: 75px;
  }

  @media screen and (min-width: 1280px) {
    padding-left: 115px;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 1280px) {
    flex-direction: row;
  }
`;

export const Content = styled.div`
  flex: 2;
  background-color: #131518;
  font-size: 16px;
  padding: 15px 18px;

  @media screen and (min-width: 768px) {
    font-size: inherit;
    padding: 56px 48px 98px 98px;
  }

  @media screen and (min-width: 1280px) {
    padding-left: 136px;
  }
`;

export const MainHeading = styled.h2`
  position: relative;
  margin-top: 56px;
  padding-right: 30px;
  padding-bottom: 30px;
  flex: 1;

  &::after {
    position: absolute;
    content: '_';
    top: -0.16rem;
    margin-left: 4px;

    animation: blink 1.2s steps(2, start) infinite;
    -webkit-animation: blink 1.2s steps(2, start) infinite;
  }
`;

export const Heading = styled.h3`
  text-transform: capitalize;
  margin-bottom: 30px;

  @media screen and (min-width: 1280px) {
    margin-bottom: 0;
  }
`;

export const TechStack = styled.ul`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 42px;

  @media screen and (min-width: 768px) {
    gap: 42px;
  }

  @media screen and (min-width: 1280px) {
    gap: 15px;
  }
`;

export const Sprite = styled.ul`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 30px;

  @media screen and (min-width: 992px) {
    gap: 78px;
    justify-content: start;
    padding: 55px 0 65px 0 !important;
  }
`;
export const Item = styled.li`
  display: flex;
  align-items: center;
  max-width: 80px;
  min-height: 80px;
  @media screen and (min-width: 768px) {
    max-width: 112px;
    min-height: 112px;
  }
`;
