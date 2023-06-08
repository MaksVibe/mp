import styled from 'styled-components';

export const Wrapper = styled.div`
    width: 100%;
    max-width: 540px;
    padding: 0 10px;
    margin: 0 auto;

    @media screen and (min-width: 768px) {
        max-width: 720px;
        padding: 0 20px;
    }

    @media screen and (min-width: 992px) {
        max-width: 960px;
        padding: 0 40px;
    }

    @media screen and (min-width: 1200px) {
        max-width: 1140px;
    }
`;
