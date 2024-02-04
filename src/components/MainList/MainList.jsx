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
    orderedList,
    wordList,
    sentenceList,
    selectedListKey,
    sort,
    filters,
    selectedList,
    orderedListLength,
    showModal,
    ModalToUse,
    handleToggleModal,
    updateWordsList,
    updateSentencesList,
    handleFiltersChange,
    handleListChange,
    handleSortChange,
    setSelectedItemIndex,
  } = useMainList(props);

  return (
    <div className="main-list-container">
      {showModal && (
        <ModalWrapper closeModal={handleToggleModal}>
          <ModalToUse
            kanaMode={showModal}
            wordList={wordList}
            sentenceList={sentenceList}
            listData={orderedList}
            listItemType={selectedListKey}
            listItemIndex={selectedItemIndex}
            filters={filters}
            sort={sort}
            updateWordsList={updateWordsList}
            updateSentencesList={updateSentencesList}
            handleFiltersChange={handleFiltersChange}
            handleSortChange={handleSortChange}
          />
        </ModalWrapper>
      )}
      <MainListHeader
        selectedListKey={selectedListKey}
        filters={filters}
        selectedList={selectedList}
        orderedListLength={orderedListLength}
        handleFiltersChange={handleFiltersChange}
        handleToggleModal={handleToggleModal}
      />
      <MainListContent
        selectedListKey={selectedListKey}
        mainList={orderedList}
        setSelectedItemIndex={setSelectedItemIndex}
        handleToggleModal={handleToggleModal}
      />
      <MainListFooter
        selectedListKey={selectedListKey}
        orderedListLength={orderedListLength}
        handleListChange={handleListChange}
        handleToggleModal={handleToggleModal}
        setSelectedItemIndex={setSelectedItemIndex}
      />
    </div>
  );
}

export default MainList;
