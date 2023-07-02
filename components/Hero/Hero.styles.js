import styled from 'styled-components';

export const Wrapper = styled.div`
	position: relative;
	margin: 0 auto;
	padding-left: 115px;
	padding-right: 6rem;
	padding-bottom: 6rem;
`;

export const BgImg = styled.div`
	position: absolute;
	/* top: -150px;
	right: -158px; */

	top: -20px;
	right: -220px;
	scale: 1.4;

	z-index: -2;
	width: 1162px;
	height: 1227px;

	background: url(/bgimg.svg) no-repeat;
	animation: turn 14s linear infinite;
	-webkit-animation: turn 14s linear infinite;
`;

export const Content = styled.div`
	display: flex;
	gap: 206px;
`;

export const Heading = styled.h1`
	position: relative;
	letter-spacing: normal;
	margin-top: 42px;
	margin-bottom: 72px;

	@media screen and (min-width: 768px) {
		font-size: 6rem;
	}

	&::after {
		position: absolute;
		content: '_';
		top: -1rem;

		animation: blink 1.2s steps(2, start) infinite;
		-webkit-animation: blink 1.2s steps(2, start) infinite;
	}
`;

export const Description = styled.p`
	max-width: 34.7rem;
`;

export const ImgWrapper = styled.div`
	position: relative;
	display: flex;

	& div {
		position: relative;

		& img {
			min-width: 332px;
			border-radius: 3px;
		}
	}

	& div::before {
		position: absolute;
		top: -42px;
		right: -56px;
		z-index: -1;

		display: block;
		content: '';
		width: 334px;
		height: 329px;

		border-radius: 3px;
		border: 1px solid black;
	}
`;

export const Span = styled.span`
	position: absolute;
	right: -228px;
	top: 78px;

	display: block;
	height: fit-content;
	min-width: 174px;

	font-size: 12px;
	text-transform: capitalize;
	transform: rotate(-90deg);
`;
