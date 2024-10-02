import React, { memo } from 'react';

const Toast = memo(({
  id, text, type, handleToastClick,
}) => {
  const className = ['toast-wrapper__toast', type].filter(Boolean).join(' ');

  const handleClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    handleToastClick(id);
  };

  return (
    <div
      role="button"
      className={className}
      onClick={handleClick}
    >
      {text}
    </div>
  );
});

export default Toast;
