import { theme } from '@/styles/theme';
import styled from 'styled-components';

export const Wrapper = styled.header`
	width: 100%;
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 1.65rem 6rem 1.66rem 7.19rem;
`;

export const Nav = styled.nav`
	display: flex;
	gap: 2rem;
	margin-right: 4rem;

	& > a:hover {
		color: ${theme.colors.accent};
	}
	& > a {
		transition: color 400ms ease-in-out;
	}
`;

export const Content = styled.div`
	display: flex;
	align-items: center;
`;
