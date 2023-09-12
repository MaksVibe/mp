import { Burger } from './Burger/Burger';
import { Btn } from './Button.styles';

export function Button({ burger, hero, close, toggleMenu }) {
  return (
    <Btn hero={hero} burger={burger} close={close} onClick={toggleMenu}>
      {close ? <Burger close /> : burger ? <Burger /> : 'Soon ...'}
    </Btn>
  );
}

export default Button;
