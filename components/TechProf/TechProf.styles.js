import styled from 'styled-components';

export const Content = styled.div`
	padding-bottom: 80px;

	background-color: white;

	background: linear-gradient(
		30deg,
		rgba(255, 255, 255, 1) 0%,
		rgba(171, 211, 239, 1) 20%,
		rgba(171, 211, 239, 1) 70%,
		rgba(255, 255, 255, 1) 100%
	);
`;

export const Heading = styled.h2`
	text-transform: capitalize;
	margin-bottom: 28px;
`;

export const TechStack = styled.ul`
	display: flex;
	flex-direction: column;
	gap: 80px;
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
