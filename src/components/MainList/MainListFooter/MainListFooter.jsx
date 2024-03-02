import React from 'react';
import './MainListFooter.scss';
import { generateRandomNumber } from '../../../utils';
import Button from '../../Button';

function MainListFooter({
  orderedListLength,
  handleToggleModal,
  setSelectedItemIndex,
}) {
  const handleOpenRandomListItemModal = () => {
    const randomIndex = generateRandomNumber(0, orderedListLength);
    setSelectedItemIndex(randomIndex);
    handleToggleModal('listItem');
  };
  const handleOpenNewItemModal = () => {
    setSelectedItemIndex(-1);
    handleToggleModal('listItem');
  };

  const handleOpenTestModal = () => {
    handleToggleModal('test');
  };

  return (
    <footer className="main-list-footer">
      <div className="main-list-footer-buttons l">
        <Button onClick={() => {}}>V</Button>
        <Button onClick={() => {}}>A</Button>
      </div>
      <div className="main-list-footer-buttons c">
        <Button onClick={handleOpenNewItemModal}>+</Button>
      </div>
      <div className="main-list-footer-buttons r">
        <Button
          onClick={handleOpenTestModal}
        >
          T
        </Button>
        <Button onClick={handleOpenRandomListItemModal}>R</Button>
      </div>
    </footer>
  );
}

export default MainListFooter;
