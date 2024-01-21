import React, { useEffect, useState } from "react";
import "./MainList.scss";
import { generateClient } from "aws-amplify/api";
import { SENTENCES, WORDS } from "../../constants";
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
import { GET_ALL_WORDS_QUERY } from "../../graphql/querys";
import { CREATE_WORD } from "../../graphql/mutations";

const FILTERS_INIT_VAL = { text: "", tags: [], types: [] };

const MainList = () => {
  const client = generateClient();
  const [mainList, setMainList] = useState([]);
  const [selectedList, setSelectedList] = useState("w");
  const [selectedItemIndex, setSelectedItemIndex] = useState(null);
  const [showKanaModal, setShowKanaModal] = useState(null);
  const [showSortModal, setShowSortModal] = useState(false);
  const [showTestModal, setShowTestModal] = useState(false);
  const [showFiltersModal, setShowFiltersModal] = useState(false);
  const [sort, setSort] = useState(["jp", "desc"]);
  const [filters, setFilters] = useState(FILTERS_INIT_VAL);
  const isWordsList = selectedList === "w";
  const listToFilter = isWordsList ? WORDS : SENTENCES;
  const listLength = mainList.length;

  useEffect(() => {
    const tt = async () => {
      //TODO ADD INITIAL LOAD
      // const result = await client.graphql({ query: GET_ALL_WORDS_QUERY });
      // const result = await client.graphql({
      //   query: CREATE_WORD,
      //   variables: {
      //     input: {
      //       jp:"tokidoki",
      //       en:['test'],
      //       types:['kanji']
      //     }
      //   }
      // });
      // console.log({result})
    };
    // tt();
    const filteredList = filterBy(WORDS, filters);
    const orderedList = sortBy(filteredList, sort[0], sort[1]);
    setMainList(orderedList);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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

  const handleListChange = () => {
    if (isWordsList) {
      const filteredList = filterBy(SENTENCES, filters);
      const orderedList = sortBy(filteredList, sort[0], sort[1]);
      setMainList(orderedList);
      setSelectedList("s");
    } else {
      const filteredList = filterBy(WORDS, filters);
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
