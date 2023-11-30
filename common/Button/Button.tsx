import { Burger } from './Burger/Burger';
import { Btn } from './Button.styles';

export type ButtonTypes = {
  burger?: boolean;
  isHero?: boolean;
  close?: boolean;
  toggleMenu?: () => void;
  content?: string;
};

export function Button({ burger, content, isHero, close, toggleMenu }: ButtonTypes) {
  return (
    <Btn suppressHydrationWarning={true} $burger={burger} $ishero={isHero} $close={close} onClick={toggleMenu}>
      {close ? <Burger close /> : burger ? <Burger /> : content ? content : 'Soon ...'}
    </Btn>
  );
}

export default Button;
