import React, { useState } from "react";
import "./MainList.scss";
import { filterBy, sortBy } from "../../utils";
import {
  FiltersModal,
  KanaModal,
  ListItemModal,
  SortModal,
  TestModal,
} from "../Modals";
import MainListFooter from "./MainListFooter";
import MainListHeader from "./MainListHeader";
import MainListContent from "./MainListContent";
import { FILTERS_INIT_VAL } from "./constants";
import ModalWrapper from "../ModalWrapper";

const MainList = ({
  wordsList,
  sentencesList,
  updateWordsList,
  updateSentencesList,
}) => {
  const [selectedList, setSelectedList] = useState("w");
  const [sort, setSort] = useState(["jp", "desc"]);
  const [filters, setFilters] = useState(FILTERS_INIT_VAL);
  const [selectedItemIndex, setSelectedItemIndex] = useState(null);
  const [showKanaModal, setShowKanaModal] = useState(null);
  const [showSortModal, setShowSortModal] = useState(false);
  const [showTestModal, setShowTestModal] = useState(false);
  const [showFiltersModal, setShowFiltersModal] = useState(false);

  const isWordsList = selectedList === "w";
  const listToFilter = isWordsList ? wordsList : sentencesList;
  const filteredList = filterBy(listToFilter, filters);
  const orderedList = sortBy(filteredList, sort[0], sort[1]);
  const listLength = orderedList.length;

  const handleSearchTextChange = (e) => {
    setFilters({ ...filters, text: e.target.value });
  };

  const handleFiltersChange = (newFilters) => {
    if (newFilters) {
      setFilters(newFilters);
    }
    setShowFiltersModal(false);
  };

  const handleListChange = async () => {
    if (isWordsList) {
      setSelectedList("s");
    } else {
      setSelectedList("w");
    }
  };

  const listItemType = selectedList === "w" ? "word" : "sentence";

  return (
    <div className="main-list-container">
      {selectedItemIndex !== null && (
        //TODO improve this warpper bit
        <ModalWrapper closeModal={() => setSelectedItemIndex(null)}>
          <ListItemModal
            listItemType={listItemType}
            listItemIndex={selectedItemIndex}
            listData={orderedList}
            allWords={wordsList}
            allSentences={sentencesList}
            updateWordsList={updateWordsList}
            updateSentencesList={updateSentencesList}
            closeModal={() => setSelectedItemIndex(null)}
          />
        </ModalWrapper>
      )}
      {showKanaModal && (
        <KanaModal
          closeModal={() => setShowKanaModal(null)}
          kanaMode={showKanaModal}
        />
      )}
      {showTestModal && (
        <TestModal
          closeModal={() => setShowTestModal(false)}
          wordsList={wordsList}
          sentencesList={sentencesList}
        />
      )}
      {showSortModal && (
        <SortModal
          closeModal={(newSort) => {
            if (newSort) {
              // const orderedList = sortBy(mainList, newSort[0], newSort[1]);
              // setMainList(orderedList);
              setSort(newSort);
            }
            setShowSortModal(false);
          }}
          sort={sort}
        />
      )}
      {showFiltersModal && (
        <FiltersModal closeModal={handleFiltersChange} filters={filters} />
      )}
      <MainListHeader
        isWordsList={isWordsList}
        filters={filters}
        listToFilter={listToFilter}
        listLength={listLength}
        handleSearchTextChange={handleSearchTextChange}
        handleFiltersChange={handleFiltersChange}
        setShowSortModal={setShowSortModal}
        setShowFiltersModal={setShowFiltersModal}
        setShowKanaModal={setShowKanaModal}
      />
      <MainListContent
        selectedList={selectedList}
        mainList={orderedList}
        setSelectedItemIndex={setSelectedItemIndex}
      />
      <MainListFooter
        listLength={listLength}
        isWordsList={isWordsList}
        handleListChange={handleListChange}
        setShowTestModal={setShowTestModal}
        setSelectedItemIndex={setSelectedItemIndex}
      />
    </div>
  );
};

export default MainList;
