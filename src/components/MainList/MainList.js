import React from 'react';
import './MainList.scss';
import MainListFooter from './MainListFooter';
import MainListHeader from './MainListHeader';
import MainListContent from './MainListContent';
import { ModalContextWrapper } from '../../contexts/ModalContext';
import useMainList from './useMainList';

function MainList(props) {
  const {
    showModal,
    Modal,
    handleToggleModal,
    handleFiltersChange,
  } = useMainList(props);

  return (
    <div className="main-list-container">
      <ModalContextWrapper closeModal={handleToggleModal} showModal={showModal}>
        <Modal
          kanaMode={showModal}
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
