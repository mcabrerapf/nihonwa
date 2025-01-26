import React from 'react';
import './ModalHeader.scss';
import { getChildrenAligmentClass } from '../../../utils';

function ModalHeader({ childrenAlign, modifier, children }) {
  const cALign = getChildrenAligmentClass(childrenAlign);
  const className = ['modal-header', cALign, modifier].filter(Boolean).join(' ');

  return (
    <header className={className}>
      {children}
    </header>
  );
}

export default ModalHeader;
