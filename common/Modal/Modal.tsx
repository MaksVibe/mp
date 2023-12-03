'use client';

import useModal from '../../utils/modal/stateModal';
import Button from '../Button/Button';
import Title from '../Title/Title';
import { Container, Wrapper } from './Modal.styles';

export default function Modal() {
  const { isOpened, modalType } = useModal();
  if (!isOpened) return <></>;

  return (
    isOpened && (
      <Container>
        <Wrapper>
          <Title text={modalType} />
          <Button content="Send" type="submit" />
        </Wrapper>
      </Container>
    )
  );
}
