'use client';

import { useState } from 'react';

import Link from 'next/link';

import Button from '../../common/Button/Button';
import Container from '../../common/Container/Container';
import useWindowSize from '../../hooks/useWindowSize';
// import useModal from '../../utils/modal/stateModal';
import { Content, Nav, Wrapper } from './Header.styles';
import { MobileMenu } from './MobileMenu/MobileMenu';

export function Header() {
  const [showMenu, setShowMenu] = useState(false);
  // const { show } = useModal();
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
              {/* <Button onClick={show} content="Consult" header /> */}
            </Content>
          ) : (
            <div>
              <Button burger onClick={handleClose} />
            </div>
          )}
        </Wrapper>
      </Container>
      {width && width < 768 && <MobileMenu showMenu={showMenu} toggleMenu={handleClose} />}
    </>
  );
}
