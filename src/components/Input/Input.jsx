import React from 'react';
import './Input.scss';
import Button from '../Button';

function Input({
  inputRef,
  value,
  showResetButton = false,
  onChange = () => {},
  onKeyDown = () => {},
  onResetButtonClick = () => {},
}) {
  return (
    <div className="input-container">
      <input
        ref={inputRef}
        autoComplete="off"
        type="text"
        value={value}
        onChange={onChange}
        onKeyDown={onKeyDown}
      />
      {!!showResetButton && value && (
      <Button onClick={onResetButtonClick} modifier="reset-text-field">
        X
      </Button>
      )}
    </div>
  );
}

export default Input;
