import React from 'react';
import './Button.scss';

function Button({
  onClick, isDisabled, isNotSelected, children, modifier, value,
}) {
  const buttonClassNames = ['button'];
  if (isDisabled || isNotSelected) buttonClassNames.push('disabled');
  if (modifier) buttonClassNames.push(modifier);
  const className = buttonClassNames.join(' ');

  return (
    <button type="button" className={className} value={value} disabled={isDisabled} onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;
