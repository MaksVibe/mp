'use client';
import styled from 'styled-components';

import { colors } from '../../styles/theme';
import { ButtonTypes } from './Button';

interface ButtonProps {
  $burger?: ButtonTypes['burger'];
  $ishero?: ButtonTypes['isHero'];
  $close?: ButtonTypes['burger'];
}

export const Btn = styled.button<ButtonProps>`
  display: block;

  ${({ $ishero }) => ($ishero ? 'padding: 16px 25px 23px; margin: 0 auto;' : 'padding: 0.74rem 1.12rem;')};

  border-radius: 3px;
  border: 3px solid ${colors.btnBorder};

  ${({ $burger }) => $burger && 'border: none;'}

  ${({ $close }) =>
    $close &&
    `
    position: absolute;
    top: 20px;
    right: 20px;
    border: none;
  `}

  @media screen and (min-width: 768px) {
    margin: 0;
  }
`;
