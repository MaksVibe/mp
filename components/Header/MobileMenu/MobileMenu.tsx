import Link from 'next/link';

import Button from '../../../common/Button/Button';
import { Content, Nav, Wrapper } from './MobileMenu.styles';

type MobileMenuTypes = {
  toggleMenu: () => void;
  show: boolean;
};

export function MobileMenu({ toggleMenu, show }: MobileMenuTypes) {
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
