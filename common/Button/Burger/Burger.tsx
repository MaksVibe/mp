import { Icon } from './Burger.styles';

export function Burger({ close }: { close?: boolean }) {
  return (
    <>
      <Icon close={close} />
      <Icon close={close} />
    </>
  );
}
