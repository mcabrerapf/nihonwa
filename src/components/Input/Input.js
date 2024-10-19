import React from 'react';
import './Input.scss';
import Button from '../Button';

function Input({
  inputRef,
  value,
  showResetButton = false,
  selectOnClick = false,
  onChange = () => {},
  onKeyDown = () => {},
  onResetButtonClick = () => {},
}) {
  const handleOnClick = (e) => {
    if (!selectOnClick) return;
    e.target.select();
  };

  return (
    <div className="input-container">
      <input
        ref={inputRef}
        autoComplete="off"
        type="text"
        value={value}
        onClick={handleOnClick}
        onChange={onChange}
        onKeyDown={onKeyDown}
      />
      {!!showResetButton && value && (
      <Button onClick={onResetButtonClick}>
        X
      </Button>
      )}
    </div>
  );
}

export default Input;
