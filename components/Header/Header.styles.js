import { theme } from '@/styles/theme';
import styled from 'styled-components';

export const Wrapper = styled.header`
    width: 100%;
    position: fixed;
    z-index: 10;
    background: ${({ scrolled }) => scrolled > 0 && theme.colors.foreground};

    transition: all 600ms ease-in-out;
`;

export const Content = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 0;

    @media screen and (min-width: 768px) {
        padding: 2rem 0;
    }
`;

export const Nav = styled.nav`
    display: flex;
    gap: 2rem;

    & > a:hover {
        color: ${theme.colors.accent};
    }
    & > a {
        transition: color 400ms ease-in-out;
    }
`;

export const ProgressContainer = styled.div`
    width: 100%;
    height: 2px;
`;

export const ProgressBar = styled.div`
    height: 2px;
    border-top-right-radius: 4px;
    border-bottom-right-radius: 4px;
    background: rgb(
        ${({ scrolled }) =>
            Math.floor(242 - scrolled * 0.85) +
            ', ' +
            Math.floor(scrolled * 0.09 + 242) +
            ', ' +
            Math.floor(242 - scrolled * 0.32)}
    );
    width: ${({ scrolled }) => (scrolled ? scrolled : 0)}%;

    transition: all 400ms ease-in-out;
`;
