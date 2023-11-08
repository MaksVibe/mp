'use client';
import { createGlobalStyle } from 'styled-components';

import { animations } from './animations';
import { common } from './common';
import { reset } from './reset';

export const GlobalStyles = createGlobalStyle`
${animations}
${reset}
${common}
`;
