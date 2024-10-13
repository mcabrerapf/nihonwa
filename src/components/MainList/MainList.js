import React from 'react';
import './MainList.scss';
import MainListFooter from './MainListFooter';
import MainListHeader from './MainListHeader';
import MainListContent from './MainListContent';
import { ModalContextWrapper } from '../../contexts/ModalContext';
import useMainList from './useMainList';
import { getModalToUse } from './helpers';

function MainList(props) {
  const {
    showModal,
    handleToggleModal,
    handleFiltersChange,
  } = useMainList(props);

  const Modal = getModalToUse(showModal);

  return (
    <div className="main-list-container">
      <ModalContextWrapper closeModal={handleToggleModal} showModal={showModal}>
        <Modal
          handleToggleModal={handleToggleModal}
          handleFiltersChange={handleFiltersChange}
        />
      </ModalContextWrapper>
      <MainListHeader
        handleFiltersChange={handleFiltersChange}
        handleToggleModal={handleToggleModal}
      />
      <MainListContent
        handleToggleModal={handleToggleModal}
      />
      <MainListFooter
        handleToggleModal={handleToggleModal}
      />
    </div>
  );
}

export default MainList;
