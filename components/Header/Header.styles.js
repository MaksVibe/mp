import styled from 'styled-components';

export const Wrapper = styled.header`
    width: 100%;
    position: fixed;
    z-index: 10;

    background: ${({ scrolled }) =>
        scrolled > 0
            ? 'rgb(1, 19, 0)'
            : 'linear-gradient(180deg, rgba(1, 19, 0, 0.4) 0%, rgba(0, 0, 0, 0) 100%)'};

    transition: all 400ms ease-in-out;
`;

export const Content = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    max-width: 1140px;
    margin: 0 auto;
    padding: 1rem 0;

    @media screen and (min-width: 768px) {
        padding: 2rem 0;
    }
`;

export const Nav = styled.nav`
    display: flex;
    gap: 2rem;

    & > a:hover {
        color: #9dfbd2;
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
            Math.floor(204 - scrolled * 0.47) +
            ', ' +
            Math.floor(scrolled * 0.47 + 204) +
            ', ' +
            Math.floor(scrolled * 0.06 + 204)}
    );
    width: ${({ scrolled }) => (scrolled ? scrolled : 0)}%;

    transition: all 400ms ease-in-out;
`;
