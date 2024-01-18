import React, { useEffect, useState } from "react";
import "./WordList.css";
import WORDS from "../../constants";
import { generateRandomNumber } from "../../utils";
import { FiltersModal, KanaModal, SortModal, TestModal, WordModal } from "../Modals";

const sortBy = (items, lan, dir) => {
  return items.sort((a, b) => {
    const valueA = lan === "en" ? a.en[0].toLowerCase() : a.sound.toLowerCase();
    const valueB = lan === "en" ? b.en[0].toLowerCase() : b.sound.toLowerCase();
    if (valueA < valueB) return dir === "desc" ? -1 : 1;
    if (valueA > valueB) return dir === "desc" ? 1 : -1;
    return 0;
  });
};

const hasTextMatch = (text, item) => {
  if (!text) return true;
  const { en, sound } = item;
  return (
    en.toLowerCase().indexOf(text.toLowerCase()) !== -1 ||
    sound.toLowerCase().indexOf(text.toLowerCase()) !== -1
  );
};

const hasFilterMatch = (filter, key, item) => {
  if (!filter.length) return true;
  let hasMatch = false;
  item[key].forEach((option) => {
    if (!!filter.find((filterOption) => filterOption === option))
      hasMatch = true;
  });
  return hasMatch;
};

const filterBy = (items, filters) => {
  const { text, tags, types } = filters;
  if (!text && !tags.length && !types.length) return items;

  return items.filter((item) => {
    const hasTextSearchMatch = hasTextMatch(text, item);
    const hasTagMatch = hasFilterMatch(tags, "tags", item);
    const hasTypeMatch = hasFilterMatch(types, "types", item);

    return hasTagMatch && hasTypeMatch && hasTextSearchMatch;
  });
};

const WordList = () => {
  const [wordList, setWordList] = useState([]);
  const [selectedWordIndex, setSelectedWordIndex] = useState(null);
  const [showKanaModal, setShowKanaModal] = useState(null);
  const [showSortModal, setShowSortModal] = useState(false);
  const [showTestModal, setShowTestModal] = useState(false);
  const [showFiltersModal, setShowFiltersModal] = useState(false);
  const [sort, setSort] = useState(["jp", "desc"]);
  const [filters, setFilters] = useState({ text: "", tags: [], types: [] });

  useEffect(() => {
    const filteredList = filterBy(WORDS, filters);
    const orderedList = sortBy(filteredList, sort[0], sort[1]);
    setWordList(orderedList);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const noActiveFilters = !filters.tags.length && !filters.types.length;

  return (
    <div className="word-list-container">
      {selectedWordIndex !== null && (
        <WordModal
          closeModal={() => setSelectedWordIndex(null)}
          wordIndex={selectedWordIndex}
          words={wordList}
        />
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
        />
      )}
      {showSortModal && (
        <SortModal
          closeModal={(newSort) => {
            if (newSort) {
              const orderedList = sortBy(wordList, newSort[0], newSort[1]);
              setWordList(orderedList);
              setSort(newSort);
            }
            setShowSortModal(false);
          }}
          sort={sort}
        />
      )}
      {showFiltersModal && (
        <FiltersModal
          closeModal={(newFilters) => {
            if (newFilters) {
              const filteredList = filterBy(WORDS, newFilters);
              const orderedList = sortBy(filteredList, sort[0], sort[1]);
              setWordList(orderedList);
              setFilters(newFilters);
            }
            setShowFiltersModal(false);
          }}
          filters={filters}
        />
      )}
      <div className="word-list-header">
        <div className="word-list-filters-buttons">
          <button onClick={() => setShowSortModal(true)}>S</button>
          <button
            className={`${noActiveFilters ? "disabled" : ""}`}
            onClick={() => setShowFiltersModal(true)}
          >
            F
          </button>
        </div>
        <div className="word-list-header-text">
          <span>言葉</span>
          <span className="word-list-count">{wordList.length}</span>
        </div>
        <div className="word-list-kana-buttons">
          <button onClick={() => setShowKanaModal("hi")}>か</button>
          <button onClick={() => setShowKanaModal("ka")}>カ</button>
        </div>
      </div>
      <ul className="word-list">
        {wordList.map((word, i) => {
          const { kanji, kana, sound } = word;
          if (!kana && !kanji) return null;
          return (
            <li
              key={`${kana}-${kanji}-${sound}`}
              className="word-list-item"
              onClick={() => setSelectedWordIndex(i)}
            >
              <span>{kanji || kana}</span>
            </li>
          );
        })}
      </ul>
      <div className="word-list-footer-buttons">
      <button
          onClick={() => {
            setShowTestModal(true);
          }}
        >
          T
        </button>
        <button
          onClick={() => {
            const randomIndex = generateRandomNumber(0, wordList.length);
            setSelectedWordIndex(randomIndex);
          }}
        >
          R
        </button>
      </div>
    </div>
  );
};

export default WordList;
