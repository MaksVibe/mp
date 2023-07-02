import styled from 'styled-components';

export const Wrapper = styled.div`
	display: flex;
	gap: 100px;
	margin-bottom: 100px;

	@media screen and (max-width: 767px) {
		flex-direction: column;
		gap: 30px;
	}
`;

export const Column = styled.div`
	display: flex;
	flex-direction: column;
	width: 50%;

	@media screen and (max-width: 767px) {
		width: 100%;
	}
`;

export const SubHeading = styled.h3`
	margin-top: 20px;
`;

export const List = styled.ul``;

export const ListItem = styled.li`
	display: flex;
	justify-content: space-between;

	&:not(:last-child) {
		margin-bottom: 10px;
	}
`;
