const { css } = require("styled-components");
const { fonts, colors } = require("./theme");

export const common = css`
  html {
    scroll-behavior: smooth;
    font-size: 16px;
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

    font-family: ${fonts.body.fontFamily};
    font-size: ${fonts.body.fontSize}rem;
    font-weight: ${fonts.body.fontWeight};
    font-style: normal;

    text-rendering: optimizeSpeed;
    color: ${colors.mainText};
    background-color: ${colors.mainBG};
  }

  main {
    margin: 0 auto;
    min-height: 100vh;
  }

  header {
    font-size: ${fonts.header.fontSize}rem;
    font-weight: ${fonts.header.fontWeight};
  }

  nav {
    color: ${colors.navText};
  }

  h1 {
    font-size: ${fonts.title.fontSize.h1}rem;
    line-height: ${fonts.title.lineHeight};

    color: ${colors.mainTitle};
  }

  h1,
  h2,
  h3 {
    font-weight: ${fonts.title.fontWeight};
  }

  button {
    font-weight: ${fonts.secondaryText.fontWeight};
  }
`;
