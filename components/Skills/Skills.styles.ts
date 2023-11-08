'use client';
import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  gap: 100px;
  background-color: #131518;

  @media screen and (max-width: 767px) {
    flex-direction: column;
    gap: 30px;
    padding-left: 45px;
  }
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;

  @media screen and (max-width: 767px) {
    width: 100%;
  }
`;

export const SubHeading = styled.h3`
  margin-bottom: 30px;
  font-size: 20px;
`;

export const List = styled.ul``;

export const ListItem = styled.li`
  position: relative;

  &:not(:last-child) {
    margin-bottom: 10px;
  }

  &::before {
    position: absolute;
    left: -20px;
    display: block;
    content: '•';
  }
`;
