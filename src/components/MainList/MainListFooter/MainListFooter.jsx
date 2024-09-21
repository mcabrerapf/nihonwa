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
      <div className="main-list-footer__buttons__l">
        <Button onClick={handleOpenRandomListItemModal}>無作為</Button>
      </div>
      <div className="main-list-footer__buttons__c">
        <Button onClick={handleOpenNewItemModal}>+</Button>
      </div>
      <div className="main-list-footer__buttons__r">
        <Button
          onClick={handleOpenTestModal}
        >
          試験
        </Button>

      </div>
    </footer>
  );
}

export default MainListFooter;
