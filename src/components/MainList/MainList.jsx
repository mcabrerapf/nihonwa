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
    wordsList,
    sentencesList,
    selectedList,
    sort,
    filters,
    listToFilter,
    filteredListLength,
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
            filters={filters}
            sort={sort}
            wordsList={wordsList}
            sentencesList={sentencesList}
            listItemType={selectedList}
            listItemIndex={selectedItemIndex}
            listData={orderedList}
            allWords={wordsList}
            allSentences={sentencesList}
            updateWordsList={updateWordsList}
            updateSentencesList={updateSentencesList}
            handleFiltersChange={handleFiltersChange}
            handleSortChange={handleSortChange}
          />
        </ModalWrapper>
      )}
      <MainListHeader
        selectedList={selectedList}
        filters={filters}
        listToFilter={listToFilter}
        filteredListLength={filteredListLength}
        handleFiltersChange={handleFiltersChange}
        handleToggleModal={handleToggleModal}
      />
      <MainListContent
        selectedList={selectedList}
        mainList={orderedList}
        setSelectedItemIndex={setSelectedItemIndex}
        handleToggleModal={handleToggleModal}
      />
      <MainListFooter
        selectedList={selectedList}
        filteredListLength={filteredListLength}
        handleListChange={handleListChange}
        handleToggleModal={handleToggleModal}
        setSelectedItemIndex={setSelectedItemIndex}
      />
    </div>
  );
}

export default MainList;
