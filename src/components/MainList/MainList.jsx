import React from 'react';
import './MainList.scss';
import MainListFooter from './MainListFooter';
import MainListHeader from './MainListHeader';
import MainListContent from './MainListContent';
import ModalWrapper from '../ModalWrapper';
import useMainList from './useMainList';

function MainList(props) {
  const {
    selectedItemIndex,
    sort,
    filters,
    orderedList,
    orderedListLength,
    wordList,
    showModal,
    ModalToUse,
    handleToggleModal,
    updateWordsList,
    handleFiltersChange,
    setSelectedItemIndex,
  } = useMainList(props);

  return (
    <div className="main-list-container">
      {showModal && (
        <ModalWrapper closeModal={handleToggleModal}>
          <ModalToUse
            kanaMode={showModal}
            listData={orderedList}
            wordList={wordList}
            listItemIndex={selectedItemIndex}
            filters={filters}
            sort={sort}
            updateWordsList={updateWordsList}
            handleFiltersChange={handleFiltersChange}
          />
        </ModalWrapper>
      )}
      <MainListHeader
        filters={filters}
        wordList={wordList}
        orderedListLength={orderedListLength}
        handleFiltersChange={handleFiltersChange}
        handleToggleModal={handleToggleModal}
      />
      <MainListContent
        mainList={orderedList}
        setSelectedItemIndex={setSelectedItemIndex}
        handleToggleModal={handleToggleModal}
      />
      <MainListFooter
        orderedListLength={orderedListLength}
        handleToggleModal={handleToggleModal}
        setSelectedItemIndex={setSelectedItemIndex}
      />
    </div>
  );
}

export default MainList;
