import React from 'react';
import './Main.scss';
import MainList from '../MainList';
import useMain from './useMain';

function Main() {
  const {
    loading,
    wordList,
    // sentenceList,
    // selectedListKey,
    // selectedList,
    // setSelectedListKey,
    updateWordsList,
    // updateSentencesList,
  } = useMain();

  if (loading) return null;

  return (
  // <main className="main-container">
    <MainList
      wordList={wordList}
      // sentenceList={sentenceList}
      // selectedListKey={selectedListKey}
      // selectedList={selectedList}
      // setSelectedListKey={setSelectedListKey}
      updateWordsList={updateWordsList}
      // updateSentencesList={updateSentencesList}
    />
  // </main>
  );
}

export default Main;
