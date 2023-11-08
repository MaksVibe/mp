import * as React from 'react';

import { Source_Code_Pro } from 'next/font/google';

import { Header } from '../components/Header/Header';
import StyledComponentsRegistry from '../lib/registry';
import { GlobalStyles } from '../styles/globalStyles';

const fonts = Source_Code_Pro({
  weight: ['400', '500', '700'],
  display: 'swap',
  subsets: ['latin'],
});

type RootLayoutProps = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <GlobalStyles />
      <body className={fonts.className}>
        <StyledComponentsRegistry>
          <Header />
          {children}
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
