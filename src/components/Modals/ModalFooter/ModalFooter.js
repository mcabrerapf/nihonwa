import React from 'react';
import './ModalFooter.scss';
import { getChildrenAligmentClass } from '../../../utils';

function ModalFooter({ childrenAlign, modifier, children }) {
  const cALign = getChildrenAligmentClass(childrenAlign);
  const className = ['modal-footer', cALign, modifier].filter(Boolean).join(' ');

  return (
    <footer className={className}>
      {children}
    </footer>
  );
}

export default ModalFooter;
