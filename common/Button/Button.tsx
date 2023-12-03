import { MouseEvent, SyntheticEvent } from 'react';

import useModal from '../../utils/modal/stateModal';
import { Burger } from './Burger/Burger';
import { Btn } from './Button.styles';

export type ButtonTypes = {
  burger?: boolean | undefined;
  isHero?: boolean | undefined;
  header?: boolean | undefined;
  close?: boolean | undefined;
  onClick?: (event?: SyntheticEvent | undefined) => void | undefined;
  content?: string | undefined;
  type?: 'button' | 'submit' | 'reset' | undefined;
};

export function Button({ burger, content, header, isHero, close, onClick, type = 'button' }: ButtonTypes) {
  const { setModalType } = useModal();

  const handleClick = (e: MouseEvent) => {
    e.preventDefault();
    (isHero || header) && setModalType(!isHero ? 'Get a qualified consultation' : 'Order a development');
    onClick && onClick();
  };

  return (
    <Btn
      type={type}
      $burger={burger}
      $ishero={isHero}
      $close={close}
      onClick={handleClick}
      // {...(type === 'submit' && { onSubmit: onClick })}
    >
      {close ? <Burger close /> : burger ? <Burger /> : content}
    </Btn>
  );
}

export default Button;
