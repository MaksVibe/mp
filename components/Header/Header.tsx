'use client';

import { useState } from 'react';

import Link from 'next/link';

import useMobileDetect from '../../hooks/useMobileDetect';
import Button from '../Button/Button';
import Container from '../Container/Container';
import { Content, Nav, Wrapper } from './Header.styles';
import { MobileMenu } from './MobileMenu/MobileMenu';

export function Header() {
  const [showMenu, setShowMenu] = useState(false);
  const mobile = useMobileDetect().isMobile();

  const handleClose = () => (showMenu ? setShowMenu(false) : setShowMenu(true));
  return (
    <>
      <Container>
        <Wrapper>
          <Link href="/">M.P.</Link>
          {!mobile && (
            <Content>
              <Nav>
                <Link href="/about">Profile</Link>
              </Nav>
              <Button />
            </Content>
          )}
          {mobile && <Button burger toggleMenu={handleClose} />}
        </Wrapper>
      </Container>
      {mobile && <MobileMenu show={showMenu} toggleMenu={handleClose} />}
    </>
  );
}
