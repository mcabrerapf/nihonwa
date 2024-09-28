import React from 'react';

function Toast({
  id, text, type, handleToastClick,
}) {
  const className = ['toaster__toasts__toast', type].filter(Boolean).join(' ');

  return (
    <div
      role="button"
      className={className}
      onClick={() => handleToastClick(id)}
    >
      {text}
    </div>
  );
}

export default Toast;
