import Link from 'next/link';

import Button from '../../../common/Button/Button';
// import useModal from '../../../utils/modal/stateModal';
import { Content, Nav, Wrapper } from './MobileMenu.styles';

type MobileMenuTypes = {
  toggleMenu: () => void;
  showMenu: boolean;
};

export function MobileMenu({ toggleMenu, showMenu }: MobileMenuTypes) {
  // const { show } = useModal();

  if (!showMenu) return <></>;

  // const handleOrderClick = () => {
  //   show();
  //   toggleMenu();
  // };

  return (
    showMenu && (
      <Wrapper>
        <Content>
          <Button close onClick={toggleMenu} />
          <Nav>
            <Link href="/" onClick={toggleMenu}>
              M.P.
            </Link>
            <Link href="/about" onClick={toggleMenu}>
              Profile
            </Link>
          </Nav>
          {/* <Button content="Order" onClick={handleOrderClick} /> */}
        </Content>
      </Wrapper>
    )
  );
}
