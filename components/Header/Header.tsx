'use client';

import { useState } from 'react';

import Link from 'next/link';

import Button from '../../common/Button/Button';
import useWindowSize from '../../hooks/useWindowSize';
import Container from '../Container/Container';
import { Content, Nav, Wrapper } from './Header.styles';
import { MobileMenu } from './MobileMenu/MobileMenu';

export function Header() {
  const [showMenu, setShowMenu] = useState(false);
  const { width } = useWindowSize();

  const handleClose = () => (showMenu ? setShowMenu(false) : setShowMenu(true));
  return (
    <>
      <Container>
        <Wrapper>
          <Link href="/">M.P.</Link>
          {width && width > 768 ? (
            <Content>
              <Nav>
                <Link href="/about">Profile</Link>
              </Nav>
              <Button />
            </Content>
          ) : (
            <div>
              <Button burger toggleMenu={handleClose} />
            </div>
          )}
        </Wrapper>
      </Container>
      {width && width < 768 && <MobileMenu show={showMenu} toggleMenu={handleClose} />}
    </>
  );
}
