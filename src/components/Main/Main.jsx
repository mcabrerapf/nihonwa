import React from 'react';
import './Main.scss';
import MainList from '../MainList';
import useMain from './useMain';

function Main() {
  const {
    wordList,
    sentenceList,
    selectedListKey,
    selectedList,
    setSelectedListKey,
    updateWordsList,
    updateSentencesList,
  } = useMain();

  return (
  // <main className="main-container">
    <MainList
      wordList={wordList}
      sentenceList={sentenceList}
      selectedListKey={selectedListKey}
      selectedList={selectedList}
      setSelectedListKey={setSelectedListKey}
      updateWordsList={updateWordsList}
      updateSentencesList={updateSentencesList}
    />
  // </main>
  );
}

export default Main;
