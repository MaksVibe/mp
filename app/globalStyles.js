'use client';
import { theme } from '@/styles/theme';
import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
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

html {
    scroll-behavior: smooth;
        font-size: 16px;

    @media screen and (min-width: 992px) {
        font-size: 20px;
    }
}

html,
body {
    max-width: 100vw;
    overflow-x: hidden;
    border: 0;
}

body {
    min-height: 100vh;
    width: 100%;

    font-family: var(--montserrat), sans-serif; 
    font-style: normal;
    font-size: inherit;
    font-weight: 300;

    line-height: 1.3;
    letter-spacing: 0.7px;
    text-rendering: optimizeSpeed;
    color: ${theme.colors.lightText};

    background-color: ${theme.colors.foreground};
    background: linear-gradient(
            to bottom,
            transparent,
            ${theme.colors.backgroundStart}
        )
        ${theme.colors.backgroundEnd};
}

@media (prefers-color-scheme: dark) {
    html {
        color-scheme: dark;
    }
}

main {
    margin: 0 auto;
    min-height: 100vh;
}

h1 {
    font-family: var(--overpass), sans-serif;
    font-size: 68px;
    font-weight: 500;
    line-height: 1;
}

h2 {
    font-size: 3rem;
}

h2,
h3 {
    text-transform: uppercase;
}

h3 {
    position: relative;
    margin-bottom: 30px;
    font-size: 2rem;
    color: ${theme.colors.lightText};
}

h3::before {
    content: '';
    display: block;
    width: 100%;
    position: absolute;
    top: 3rem;
    height: 2px;
    background-color: ${theme.colors.accent};
}

`;
