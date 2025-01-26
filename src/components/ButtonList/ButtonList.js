import React from 'react';
import './ButtonList.scss';
import Button from '../Button';

function ButtonList({
  modifier,
  list = [],
  textKey = '',
  disableButtons = false,
  onClick = () => {},
}) {
  if (!list.length) return null;
  const className = ['button-list', modifier].filter(Boolean).join(' ');

  return (
    <div className={className}>
      {list.map((listItem, index) => {
        const buttonText = typeof listItem === 'string' ? listItem : listItem[textKey];
        const buttonKey = typeof listItem === 'string' ? `${listItem}-${index}` : listItem.id;

        return (
          <Button
            key={buttonKey}
            modifier={`${disableButtons ? 'dotted-border' : ''}`}
            isDisabled={disableButtons}
            onClick={() => onClick(listItem)}
          >
            {buttonText}
          </Button>
        );
      })}
    </div>
  );
}

export default ButtonList;
