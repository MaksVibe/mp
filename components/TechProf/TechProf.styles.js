import styled from 'styled-components';

export const Content = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 1440px;
  margin: 0 auto;

  padding: 0 35px 154px 115px;

  font-size: 20px;
  color: white;
  background-color: #131313;
`;

export const MainHeading = styled.h2`
  position: relative;
  margin-top: 56px;
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
`;

export const TechStack = styled.ul`
  flex: 2;
  width: 100%;
  padding: 56px 0 0 136px !important;
  display: flex;
  flex-direction: column;
  gap: 15px;
  background-color: #131518;
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
