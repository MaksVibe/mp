import { css } from 'styled-components';

export const reset = css`
	/* Box sizing rules */
	*,
	*::before,
	*::after {
		box-sizing: border-box;
	}

	/* Remove default padding */
	html,
	body,
	ul[class],
	ol[class] {
		padding: 0;
	}

	/* Remove default margin */
	html,
	body,
	ul[class],
	ol[class],
	figure,
	blockquote,
	dl,
	dd,
	h1,
	h2,
	h3,
	h4,
	h5,
	h6,
	p {
		margin: 0;
	}

	/* Remove list styles on ul, ol elements */
	ul,
	ol {
		list-style: none;
	}

	/* Anchor elements that don't have a class get default styles */
	a {
		text-decoration: none;
		color: inherit;
	}

	a:not([class]) {
		text-decoration-skip-ink: auto;
	}

	a:hover {
		text-decoration: none;
	}

	/* Responsive images */
	img {
		max-width: 100%;
		height: auto;
		display: block;
	}

	/* Improve article readability */
	article > * + * {
		margin-top: 1em;
	}

	/* Inherit fonts for inputs and buttons */
	input,
	button,
	textarea,
	select {
		font: inherit;
	}

	/* Remove resizing button */
	textarea {
		resize: none;
	}

	/* Remove focus outline */
	button:focus,
	input:active,
	input:focus,
	textarea:focus,
	textarea:active {
		outline: none !important;
		box-shadow: none !important;
	}

	/* Basic default for headings */
	h1,
	h2,
	h3,
	h4,
	h5 {
		font-size: inherit;
		font-weight: inherit;
	}

	/* --------------- */
	/* lintHTMLwithCSS */
	/* --------------- */

	/* If no link is supplied or href field is missing */
	a:is(:not([href]), [href=''], [href='#']) {
		outline: 2px dotted red;
	}

	/* only <li>'s allowed in ul & ol */
	:is(ul, ol) > *:not(li) {
		outline: 2px dotted red;
	}

	/* Blur images when they have no alt, width, height attribute */
	img:not([alt]),
	img:not([width]),
	img:not([height]) {
		filter: blur(10px);
	}

	/* Remove all animations and transitions for people that prefer not to see them */
	@media (prefers-reduced-motion: reduce) {
		* {
			animation-duration: 0.01ms !important;
			animation-iteration-count: 1 !important;
			transition-duration: 0.01ms !important;
			scroll-behavior: auto !important;
		}
	}

	button {
		border: none;
		margin: 0;
		padding: 0;
		width: auto;
		overflow: visible;
		cursor: pointer;

		text-align: inherit;
		outline: none;
		border-radius: 0;

		background: transparent;

		/* inherit font & color from ancestor */
		color: inherit;

		/* Normalize line-height. Cannot be changed from normal in Firefox 4+. */
		line-height: normal;

		/* Corrects font smoothing for webkit */
		-webkit-font-smoothing: inherit;
		-moz-osx-font-smoothing: inherit;

		/* Corrects inability to style clickable input types in iOS */
		-webkit-appearance: none;
	}
`;
