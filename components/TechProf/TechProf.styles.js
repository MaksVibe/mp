import styled from 'styled-components';

export const Content = styled.div`
    padding-bottom: 80px;

    background: linear-gradient(
        30deg,
        rgba(0, 0, 0, 0) 0%,
        rgba(157, 251, 210, 0.5) 20%,
        rgba(157, 251, 210, 0.4) 70%,
        rgba(0, 0, 0, 0) 100%
    );
`;

export const Heading = styled.h2`
    margin-bottom: 28px;
`;

export const TechStack = styled.ul`
    display: flex;
    flex-direction: column;
    gap: 60px;
`;

export const Technology = styled.li`
    &:first-child {
        padding-top: 60px;
    }
`;

export const Sprite = styled.ul`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 30px;

    @media screen and (min-width: 992px) {
        gap: 40px;
        justify-content: start;
    }
`;
export const Item = styled.li`
    max-width: 80px;
    @media screen and (min-width: 768px) {
        max-width: 112px;
    }
`;
