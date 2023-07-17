'use client';

import Link from 'next/link';

import Button from '../Button/Button';
import Container from '../Container/Container';
import { Content, Nav, Wrapper } from './Header.styles';

export function Header() {
  return (
    <Container>
      <Wrapper>
        <Link href="/">M.P.</Link>
        <Content>
          <Nav>
            {/* <p>Main</p>
          <p>Portfolio</p>
          <p>Contacts</p> */}
            <Link href="/about">Main</Link>
            {/* <Link href="/">Portfolio</Link> */}
            {/* <Link href="/">Contacts</Link> */}
          </Nav>
          <Button />
        </Content>
      </Wrapper>
    </Container>
  );
}
