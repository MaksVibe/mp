'use client';

import Link from 'next/link';

import Button from '../../Button/Button';
import { Content, Nav, Wrapper } from './MobileMenu.styles';

export function MobileMenu({ toggleMenu, show }) {
  console.log('show', show);
  return show ? (
    <Wrapper>
      <Content>
        <Button close toggleMenu={toggleMenu} />
        <Nav>
          <Link href="/" onClick={toggleMenu}>
            M.P.
          </Link>
          <Link href="/about" onClick={toggleMenu}>
            Profile
          </Link>
        </Nav>
        <Button toggleMenu={toggleMenu} />
      </Content>
    </Wrapper>
  ) : (
    <></>
  );
}
