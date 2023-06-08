import styled from 'styled-components';

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column-reverse;
    align-items: normal;
    gap: 20px;
    margin-top: 64px;

    & > div {
        width: 100%;
    }

    @media screen and (min-width: 768px) {
        flex-direction: row;
    }
`;

export const ProjLink = styled.a`
    width: fit-content;
    overflow: hidden;
    margin-top: 12px;
    border-radius: 4px;
    -webkit-box-shadow: 0px 0px 16px 4px rgba(196, 253, 228, 0.3);
    -moz-box-shadow: 0px 0px 16px 4px rgba(196, 253, 228, 0.3);
    box-shadow: 0px 0px 16px 4px rgba(196, 253, 228, 0.3);

    &:hover {
        -webkit-box-shadow: 0px 0px 20px 6px rgba(196, 253, 228, 0.6);
        -moz-box-shadow: 0px 0px 20px 6px rgba(196, 253, 228, 0.6);
        box-shadow: 0px 0px 20px 6px rgba(196, 253, 228, 0.6);
    }

    transition: all 400ms;
`;

export const Description = styled.a`
    &:hover {
        color: #9dfbd2;
    }

    transition: color 400ms ease-out;
`;
