import { Burger } from './Burger/Burger';
import { Btn } from './Button.styles';

export type ButtonTypes = {
  burger?: boolean;
  hero?: boolean;
  close?: boolean;
  toggleMenu?: () => void;
};

export function Button({ burger, hero, close, toggleMenu }: ButtonTypes) {
  return (
    <Btn hero={hero} burger={burger} close={close} onClick={toggleMenu}>
      {close ? <Burger close /> : burger ? <Burger /> : 'Soon ...'}
    </Btn>
  );
}

export default Button;
