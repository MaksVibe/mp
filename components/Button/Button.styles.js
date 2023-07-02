import styled from 'styled-components';

import { colors } from '@/styles/theme';

export const Btn = styled.button`
	padding: ${({ hero }) => (hero ? '16px 25px 23px' : '0.74rem 1.12rem')};

	border-radius: 3px;
	border: 3px solid ${colors.btnBorder};
`;
