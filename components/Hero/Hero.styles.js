import styled from 'styled-components';

export const Content = styled.div`
    padding-top: 120px;
    padding-bottom: 80px;

    @media screen and (min-width: 768px) {
        padding-top: 180px;
        padding-bottom: 120px;
    }
`;

export const Heading = styled.h1`
    letter-spacing: normal;

    @media screen and (min-width: 768px) {
        font-size: 6rem;
    }
`;

export const SubHeading = styled.h2`
    margin-bottom: 20px;

    @media screen and (max-width: 767px) {
        font-size: 1.6rem;
    }
`;

export const Description = styled.p`
    max-width: 40rem;
    margin-top: 40px;
`;
