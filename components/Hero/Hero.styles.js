import styled from 'styled-components';

export const Wrapper = styled.div`
  position: relative;
  margin-bottom: 3rem;
  padding: 0;

  @media screen and (min-width: 1280px) {
    margin-bottom: 9.6rem;
  }
`;

export const BgImg = styled.div`
  position: absolute;

  top: -20px;
  right: -220px;
  scale: 1.4;

  z-index: -2;
  width: 1162px;
  height: 1227px;

  background: url(/bgimg.svg) no-repeat;
  animation: turn 14s linear infinite;
  -webkit-animation: turn 14s linear infinite;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column-reverse;
  gap: 16.74%;

  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
`;

export const Heading = styled.h1`
  position: relative;
  letter-spacing: normal;
  margin-bottom: 72px;
  font-size: 2rem;

  &::after {
    position: absolute;
    content: '_';
    top: -0.32rem;

    animation: blink 1.2s steps(2, start) infinite;
    -webkit-animation: blink 1.2s steps(2, start) infinite;
  }

  @media screen and (min-width: 768px) {
    font-size: 4rem;

    &::after {
      top: -0.63rem;
    }
  }

  @media screen and (min-width: 1040px) {
    font-size: 5rem;

    &::after {
      top: -1rem;
    }
  }

  @media screen and (min-width: 1280px) {
    font-size: 6rem;
    gap: 183px;
  }
`;

export const DescriptionWrapper = styled.div`
  max-width: 100%;

  @media screen and (min-width: 768px) {
    max-width: 45%;
  }
`;

export const Description = styled.p`
  font-size: 0.85rem;
  margin-bottom: 1rem;

  @media screen and (min-width: 768px) {
    margin-bottom: 34px;
  }

  @media screen and (min-width: 1040px) {
    font-size: 1rem;
  }
`;

export const ImgWrapper = styled.div`
  position: relative;
  margin-bottom: 20px;
  max-width: 76%;

  & img {
    border-radius: 3px;
  }

  &::before {
    position: absolute;
    top: -20px;
    right: -26px;
    z-index: -1;

    display: block;
    content: '';
    width: 100%;
    height: 100%;

    border-radius: 3px;
    border: 1px solid black;

    @media screen and (min-width: 768px) {
      height: 48%;
      top: -26px;
      margin-bottom: 0;
    }

    @media screen and (min-width: 1040px) {
      height: 60%;
      top: -28px;
      right: -28px;
    }

    @media screen and (min-width: 1280px) {
      height: 87%;
      top: -30px;
      right: -30px;
    }

    @media screen and (min-width: 1440px) {
      height: 100%;
    }
  }

  @media screen and (min-width: 768px) {
    max-width: 27%;
  }
`;

export const Span = styled.span`
  position: absolute;
  right: -90px;
  top: 152px;

  display: block;
  height: fit-content;
  min-width: 174px;

  font-size: 10px;
  text-transform: capitalize;
  transform: rotate(-90deg);

  /* @media screen and (min-width: 768px) {
    right: -150px;
    top: 80px;
  }

  @media screen and (min-width: 1040px) {
    right: -174px;
    top: 80px;
    font-size: 14px;
  }

  @media screen and (min-width: 1280px) {
    right: -168px;
    top: 92px;
  }

  @media screen and (min-width: 1440px) {
    right: -254px;
    top: 90px;
  } */
`;
