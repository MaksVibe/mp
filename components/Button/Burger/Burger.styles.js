import styled from 'styled-components';

import { colors } from '@/styles/theme';

export const Icon = styled.div`
  width: 1.6rem;
  height: 2px;
  background-color: ${colors.mainText};
  &:first-child {
    margin-bottom: 4px;
  }

  ${({ close }) =>
    close &&
    `
    position: absolute;
    &:first-child {
      margin-bottom: 0;
      rotate: 45deg;
    }
    &:last-child {
      rotate: -45deg;
    }
  `}
`;
