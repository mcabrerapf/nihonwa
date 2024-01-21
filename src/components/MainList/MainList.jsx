import React, { useEffect, useState } from "react";
import "./MainList.scss";
import { filterBy, sortBy } from "../../utils";
import {
  FiltersModal,
  KanaModal,
  SentenceModal,
  SortModal,
  TestModal,
  WordModal,
} from "../Modals";
import MainListFooter from "./MainListFooter";
import MainListHeader from "./MainListHeader";
import MainListContent from "./MainListContent";
import { FILTERS_INIT_VAL } from "./constants";

const MainList = ({
  wordsList,
  sentencesList,
  updateWordsList,
  updateSentencesList,
}) => {
  const [mainList, setMainList] = useState([]);
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
  const listLength = mainList.length;

  useEffect(() => {
    async function initList() {
      const filteredList = filterBy(listToFilter, filters);
      const orderedList = sortBy(filteredList, sort[0], sort[1]);
      setMainList(orderedList);
    }

    initList();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [wordsList, sentencesList]);

  const handleSearchTextChange = (e) => {
    const filteredList = filterBy(listToFilter, {
      ...filters,
      text: e.target.value,
    });
    const orderedList = sortBy(filteredList, sort[0], sort[1]);
    setMainList(orderedList);
    setFilters({ ...filters, text: e.target.value });
  };

  const handleFiltersChange = (newFilters) => {
    if (newFilters) {
      const filteredList = filterBy(listToFilter, newFilters);
      const orderedList = sortBy(filteredList, sort[0], sort[1]);
      setMainList(orderedList);
      setFilters(newFilters);
    }
    setShowFiltersModal(false);
  };

  const handleListChange = async () => {
    if (isWordsList) {
      const filteredList = filterBy(sentencesList, filters);
      const orderedList = sortBy(filteredList, sort[0], sort[1]);
      setMainList(orderedList);
      setSelectedList("s");
    } else {
      const filteredList = filterBy(wordsList, filters);
      const orderedList = sortBy(filteredList, sort[0], sort[1]);
      setMainList(orderedList);
      setSelectedList("w");
    }
  };
  const ListModal = isWordsList ? WordModal : SentenceModal;

  return (
    <div className="main-list-container">
      {selectedItemIndex !== null && (
        <ListModal
          closeModal={() => setSelectedItemIndex(null)}
          wordIndex={selectedItemIndex}
          sentenceIndex={selectedItemIndex}
          words={mainList}
          sentences={mainList}
          updateWordsList={updateWordsList}
          updateSentencesList={updateSentencesList}
        />
      )}
      {showKanaModal && (
        <KanaModal
          closeModal={() => setShowKanaModal(null)}
          kanaMode={showKanaModal}
        />
      )}
      {showTestModal && (
        <TestModal closeModal={() => setShowTestModal(false)} />
      )}
      {showSortModal && (
        <SortModal
          closeModal={(newSort) => {
            if (newSort) {
              const orderedList = sortBy(mainList, newSort[0], newSort[1]);
              setMainList(orderedList);
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
        listLength={listLength}
        handleSearchTextChange={handleSearchTextChange}
        handleFiltersChange={handleFiltersChange}
        setShowSortModal={setShowSortModal}
        setShowFiltersModal={setShowFiltersModal}
        setShowKanaModal={setShowKanaModal}
      />
      <MainListContent
        mainList={mainList}
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
