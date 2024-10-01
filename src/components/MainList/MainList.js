import React from 'react';
import './MainList.scss';
import MainListFooter from './MainListFooter';
import MainListHeader from './MainListHeader';
import MainListContent from './MainListContent';
import { ModalContextWrapper } from '../../contexts/ModalContext';
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
    jishoWord,
    setJishoWord,
    ModalToUse,
    handleToggleModal,
    handleUpdateWordsList,
    handleFiltersChange,
    setSelectedItemIndex,
  } = useMainList(props);

  return (
    <div className="main-list-container">
      {showModal && (
        <ModalContextWrapper closeModal={handleToggleModal}>
          <ModalToUse
            kanaMode={showModal}
            listData={orderedList}
            wordList={wordList}
            listItemIndex={selectedItemIndex}
            filters={filters}
            sort={sort}
            jishoWord={jishoWord}
            setJishoWord={setJishoWord}
            setSelectedItemIndex={setSelectedItemIndex}
            handleUpdateWordsList={handleUpdateWordsList}
            handleToggleModal={handleToggleModal}
            handleFiltersChange={handleFiltersChange}
          />
        </ModalContextWrapper>
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
