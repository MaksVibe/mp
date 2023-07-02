import styled from 'styled-components';

export const Wrapper = styled.div`
	display: flex;
	gap: 100px;
	margin: 200px 0 100px;

	@media screen and (max-width: 767px) {
		margin: 100px 0 100px;
	}
`;

export const TextWrapper = styled.div`
	max-width: 50%;

	@media screen and (max-width: 767px) {
		max-width: 100%;
	}
`;

export const ImgWrapper = styled.div`
	width: 100%;
	border-radius: 8px;
	max-width: 380px;
	max-height: 380px;
	overflow: hidden;
	-webkit-box-shadow: 0px 0px 16px 4px rgba(196, 253, 228, 0.3);
	-moz-box-shadow: 0px 0px 16px 4px rgba(196, 253, 228, 0.3);
	box-shadow: 0px 0px 16px 4px rgba(196, 253, 228, 0.3);

	&:hover {
		-webkit-box-shadow: 0px 0px 20px 6px rgba(196, 253, 228, 0.6);
		-moz-box-shadow: 0px 0px 20px 6px rgba(196, 253, 228, 0.6);
		box-shadow: 0px 0px 20px 6px rgba(196, 253, 228, 0.6);
	}
	transition: all 400ms;

	@media screen and (max-width: 767px) {
		display: none;
	}
`;
