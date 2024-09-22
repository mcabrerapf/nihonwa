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
    handleToggleModal('listItemModal');
  };
  const handleOpenNewItemModal = () => {
    setSelectedItemIndex(-1);
    handleToggleModal('listItemModal');
  };

  const handleOpenExamModal = () => {
    handleToggleModal('examModal');
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
          onClick={handleOpenExamModal}
        >
          試験
        </Button>

      </div>
    </footer>
  );
}

export default MainListFooter;
