import React from 'react';

import { Icon } from './Burger.styles';

export function Burger({ close }) {
  return (
    <>
      <Icon close={close} />
      <Icon close={close} />
    </>
  );
}
