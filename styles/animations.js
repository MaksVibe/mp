const { css } = require('styled-components');

export const animations = css`
	@keyframes blink {
		to {
			visibility: hidden;
		}
	}
	@-webkit-keyframes blink {
		to {
			visibility: hidden;
		}
	}

	@keyframes turn {
		0% {
			top: -20px;
			right: -220px;
		}
		20% {
			scale: 1.2;
			top: -264px;
			right: -252px;
			transform: rotate(-39.943deg);
		}
		40% {
			scale: 1.4;
			top: -374px;
			right: -382px;
			transform: rotate(-68.272deg);
		}
		60% {
			scale: 1.4;
			top: -390px;
			right: -142px;
			transform: rotate(-97.931deg);
		}
		80% {
			top: -260px;
			right: -370px;
			transform: rotate(-66.667deg);
		}
		100% {
			top: -20px;
			right: -220px;
		}
	}
	@-webkit-keyframes turn {
		0% {
			top: -20px;
			right: -220px;
		}
		20% {
			scale: 1.2;
			top: -264px;
			right: -252px;
			transform: rotate(-39.943deg);
		}
		40% {
			scale: 1.2;
			top: -374px;
			right: -382px;
			transform: rotate(-68.272deg);
		}
		60% {
			scale: 1.4;
			top: -390px;
			right: -142px;
			transform: rotate(-97.931deg);
		}
		80% {
			top: -260px;
			right: -370px;
			transform: rotate(-66.667deg);
		}
		100% {
			top: -20px;
			right: -220px;
		}
	}
`;
