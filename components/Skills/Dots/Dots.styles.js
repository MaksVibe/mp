import { theme } from '@/styles/theme';
import styled from 'styled-components';

export const DotsList = styled.ul`
    display: flex;
    gap: 6px;
    ${({ amount }) =>
        `:nth-child(-n + ${amount}) {
        background-color: ${theme.colors.accent};
        border-color: ${theme.colors.accent};
    }`}
`;

export const ListItem = styled.li`
    width: 1rem;
    height: 1rem;
    border-radius: 8px;
    border: 2px solid ${theme.colors.lightText};
`;

export const Dot = styled.div``;
